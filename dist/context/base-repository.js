"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRepository = void 0;
const lodash_1 = require("lodash");
class BaseRepository {
    repository;
    dataSource;
    createGraphQLQueryBuilder;
    alias;
    _defaults;
    constructor(entity, alias, options) {
        this.alias = alias;
        this.dataSource = options.context.dataSource;
        this.repository = options.context.dataSource.getRepository(entity);
        this.createGraphQLQueryBuilder = () => options.context.graphQLDataLoader.loadEntity(entity, alias);
        this._defaults = options.defaults;
    }
    createQueryBuilder() {
        return this.repository.createQueryBuilder(this.alias);
    }
    async find(options) {
        return this.findBase(options);
    }
    async first(options) {
        return this.firstBase(options);
    }
    _hasJoinWithManyRows(query) {
        return (!(0, lodash_1.isEmpty)(query.expressionMap.joinAttributes) &&
            query.expressionMap.joinAttributes.find((j) => !j.relation || !j.relation.isOneToOne));
    }
    _isColumnSelected(query, columnName) {
        return (query.expressionMap.selects.findIndex((s) => s.selection.endsWith(columnName) || s.aliasName === columnName) > -1);
    }
    findBase(options, filterCallback, selectCallback) {
        const primaryCol = this.repository.metadata.primaryColumns[0]?.propertyName;
        if (!primaryCol) {
            throw Error(`Primary column not found for ${this.repository.metadata.name}`);
        }
        let baseQuery = this.createQueryBuilder();
        if (filterCallback) {
            baseQuery = filterCallback(baseQuery);
        }
        if (!this._isColumnSelected(baseQuery, primaryCol)) {
            baseQuery = baseQuery.select(`${this.alias}.${primaryCol}`, primaryCol);
        }
        baseQuery = this.addWhere(baseQuery, options.where);
        baseQuery = this._selectOrderColumns(baseQuery, this.alias);
        const limitQueryAlias = `l_${this.alias}`;
        let limitQuery = this.dataSource
            .createQueryBuilder()
            .from(`(${baseQuery.getQuery()})`, limitQueryAlias)
            .skip(options.skip)
            .take(options.take);
        if (this._hasJoinWithManyRows(baseQuery)) {
            limitQuery = limitQuery.select(`DISTINCT("${limitQueryAlias}"."${primaryCol}")`, primaryCol);
            if (!(0, lodash_1.isEmpty)(this._defaults?.orderBy)) {
                limitQuery = this._selectOrderColumns(limitQuery, limitQueryAlias, { wrap: true });
                limitQuery = this._setDefaultOrder(limitQuery, limitQueryAlias, { wrap: true });
                limitQuery = this.dataSource
                    .createQueryBuilder()
                    .select(`"ids"."${primaryCol}"`)
                    .from(`(${limitQuery.getQuery()})`, "ids");
            }
        }
        else {
            limitQuery = limitQuery.select(`"${limitQueryAlias}"."${primaryCol}"`, primaryCol);
            limitQuery = this._setDefaultOrder(limitQuery, limitQueryAlias, { wrap: true });
        }
        return this.createGraphQLQueryBuilder()
            .info(options.resolverInfo)
            .ejectQueryBuilder((query) => {
            query
                .where(`${this.alias}.${primaryCol} IN (${limitQuery.getQuery()})`)
                .setParameters(baseQuery.getParameters());
            query = this._setDefaultOrder(query, this.alias);
            return selectCallback ? selectCallback(query) : query;
        })
            .loadMany();
    }
    firstBase(options, queryCallback) {
        if (options.resolverInfo) {
            return this.createGraphQLQueryBuilder()
                .info(options.resolverInfo)
                .ejectQueryBuilder((query) => {
                query = this.addWhere(query, options.where);
                return queryCallback ? queryCallback(query) : query;
            })
                .loadOne();
        }
        const query = this.addWhere(this.createQueryBuilder(), options.where);
        return (queryCallback ? queryCallback(query) : query).getOne();
    }
    addWhere(query, where) {
        const mergedWhere = this._mountWhere(where);
        if (mergedWhere && !(0, lodash_1.isEmpty)(mergedWhere)) {
            query = query.andWhere(mergedWhere);
        }
        return query;
    }
    _mountWhere(where) {
        if (this._defaults?.where) {
            return { ...where, ...this._defaults.where };
        }
        return where;
    }
    _setDefaultOrder(query, alias, options = { wrap: false }) {
        if (!this._defaults?.orderBy) {
            return query;
        }
        for (const key in this._defaults.orderBy) {
            query = query.addOrderBy(options.wrap ? `"${alias}"."${key}"` : `${alias}.${key}`, this._defaults.orderBy[key]);
        }
        return query;
    }
    _selectOrderColumns(query, alias, options = { wrap: false }) {
        if (!this._defaults?.orderBy) {
            return query;
        }
        for (const key in this._defaults.orderBy) {
            query = query.addSelect(options.wrap ? `"${alias}"."${key}"` : `${alias}.${key}`, key);
        }
        return query;
    }
}
exports.BaseRepository = BaseRepository;
//# sourceMappingURL=base-repository.js.map