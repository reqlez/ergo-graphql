"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionRepository = void 0;
const core_1 = require("@fleet-sdk/core");
const consts_1 = require("../consts");
const entities_1 = require("../entities");
const utils_1 = require("../graphql/resolvers/utils");
const utils_2 = require("../utils");
const base_repository_1 = require("./base-repository");
class TransactionRepository extends base_repository_1.BaseRepository {
    constructor(context) {
        super(entities_1.TransactionEntity, "tx", {
            context,
            defaults: { where: { mainChain: true }, orderBy: { globalIndex: "DESC" } }
        });
    }
    async find(options) {
        const { minHeight, maxHeight, address, addresses, transactionIds } = options;
        const ergoTrees = addresses
            ? addresses.map((address) => core_1.ErgoAddress.fromBase58(address).ergoTree)
            : [];
        return this.findBase(options, (filterQuery) => {
            if (address) {
                ergoTrees.push(core_1.ErgoAddress.fromBase58(address).ergoTree);
            }
            if (ergoTrees.length > 0) {
                const inputQuery = this.createInputQuery(maxHeight);
                const outputQuery = this.createOutputQuery(maxHeight);
                filterQuery = filterQuery.innerJoin(`(${inputQuery.getQuery()} UNION ${outputQuery.getQuery()})`, "boxes", `"boxes"."transactionId" = ${this.alias}.transactionId`);
            }
            if (minHeight) {
                filterQuery = filterQuery.andWhere(`${this.alias}.inclusionHeight >= :minHeight`, {
                    minHeight
                });
            }
            if (maxHeight) {
                filterQuery = filterQuery.andWhere(`${this.alias}.inclusionHeight <= :maxHeight`, {
                    maxHeight
                });
            }
            if (options.where?.transactionId && transactionIds) {
                transactionIds.push(options.where.transactionId);
                delete options.where.transactionId;
            }
            if (transactionIds && transactionIds.length > 0) {
                filterQuery = filterQuery.andWhere(`${this.alias}.transactionId IN (:...transactionIds)`);
            }
            filterQuery = filterQuery.setParameters((0, utils_2.removeUndefined)({
                height: maxHeight,
                maxHeight,
                minHeight,
                ergoTrees,
                transactionIds
            }));
            return filterQuery;
        }, (selectQuery) => {
            selectQuery.andWhere(`${this.alias}.mainChain = true`);
            if (ergoTrees.length > 0 &&
                (0, utils_1.getArgumentValue)(options.resolverInfo, "outputs", "relevantOnly") === true) {
                const outputsJoin = selectQuery.expressionMap.joinAttributes.find((x) => x.relation?.propertyName === "outputs");
                if (outputsJoin) {
                    const minerTreeCondition = `${outputsJoin.alias.name}.ergoTree = :minerTree`;
                    const relevantCondition = `${outputsJoin.alias.name}.ergoTree IN (:...ergoTrees) OR ${minerTreeCondition}`;
                    outputsJoin.condition = outputsJoin.condition
                        ? `${outputsJoin.condition} AND (${relevantCondition})`
                        : relevantCondition;
                    selectQuery = selectQuery.setParameters({
                        minerTree: consts_1.MINER_FEE_ERGO_TREE
                    });
                }
            }
            return selectQuery;
        });
    }
    async count(options) {
        const inputsQuery = this.createInputQuery(options.where.maxHeight);
        const outputsQuery = this.createOutputQuery(options.where.maxHeight);
        const { count } = await this.repository
            .createQueryBuilder(this.alias)
            .select("COUNT(DISTINCT(tx.transactionId))", "count")
            .innerJoin(`(${inputsQuery.getQuery()} UNION ${outputsQuery.getQuery()})`, "boxes", '"boxes"."transactionId" = tx.transactionId')
            .where(`${this.alias}.mainChain = true`)
            .setParameters((0, utils_2.removeUndefined)({
            ergoTree: core_1.ErgoAddress.fromBase58(options.where.address).ergoTree,
            height: options.where.maxHeight
        }))
            .getRawOne();
        return count;
    }
    async getMaxGlobalIndex() {
        const { globalIndex } = await this.repository
            .createQueryBuilder("trx")
            .select("MAX(global_index)", "globalIndex")
            .getRawOne();
        return globalIndex;
    }
    createOutputQuery(height) {
        let query = this.dataSource
            .getRepository(entities_1.BoxEntity)
            .createQueryBuilder("box")
            .select("box.transactionId", "transactionId")
            .where("box.mainChain = true AND box.ergoTree IN (:...ergoTrees)");
        if (height) {
            query = query.andWhere("box.settlementHeight <= :height");
        }
        return query;
    }
    createInputQuery(height) {
        let query = this.dataSource
            .getRepository(entities_1.BoxEntity)
            .createQueryBuilder("box")
            .select("input.transactionId", "transactionId")
            .leftJoin(entities_1.InputEntity, "input", "box.boxId = input.boxId AND input.mainChain = true")
            .where("box.mainChain = true AND box.ergoTree IN (:...ergoTrees)");
        if (height) {
            query = query.andWhere("box.settlementHeight <= :height");
        }
        return query;
    }
}
exports.TransactionRepository = TransactionRepository;
//# sourceMappingURL=transactions-repository.js.map