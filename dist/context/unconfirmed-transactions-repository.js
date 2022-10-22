"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnconfirmedTransactionRepository = void 0;
const core_1 = require("@fleet-sdk/core");
const entities_1 = require("../entities");
const base_repository_1 = require("./base-repository");
class UnconfirmedTransactionRepository extends base_repository_1.BaseRepository {
    constructor(context) {
        super(entities_1.UnconfirmedTransactionEntity, "utx", { context });
    }
    async find(options) {
        const { address, addresses, transactionIds } = options;
        const ergoTrees = addresses
            ? addresses.map((address) => core_1.ErgoAddress.fromBase58(address).ergoTree)
            : [];
        return this.findBase(options, (filterQuery) => {
            if (address) {
                ergoTrees.push(core_1.ErgoAddress.fromBase58(address).ergoTree);
            }
            if (ergoTrees.length > 0) {
                const inputQuery = this.dataSource
                    .getRepository(entities_1.UnconfirmedBoxEntity)
                    .createQueryBuilder("box")
                    .select("input.transactionId", "transactionId")
                    .leftJoin(entities_1.UnconfirmedInputEntity, "input", "box.boxId = input.boxId")
                    .where("box.ergoTree IN (:...ergoTrees)");
                const outputQuery = this.dataSource
                    .getRepository(entities_1.UnconfirmedBoxEntity)
                    .createQueryBuilder("box")
                    .select("box.transactionId", "transactionId")
                    .where("box.ergoTree IN (:...ergoTrees)");
                filterQuery = filterQuery.innerJoin(`(${inputQuery.getQuery()} UNION ${outputQuery.getQuery()})`, "boxes", `"boxes"."transactionId" = ${this.alias}.transactionId`);
                filterQuery = filterQuery.setParameters({ ergoTrees });
            }
            if (options.where?.transactionId && transactionIds) {
                transactionIds.push(options.where.transactionId);
                delete options.where.transactionId;
            }
            if (transactionIds && transactionIds.length > 0) {
                filterQuery = filterQuery.andWhere(`${this.alias}.transactionId IN (:...transactionIds)`, {
                    transactionIds
                });
            }
            return filterQuery;
        });
    }
    async count() {
        const { count } = await this.repository
            .createQueryBuilder(this.alias)
            .select("COUNT(utx.transactionId)", "count")
            .getRawOne();
        return count || 0;
    }
    async sum(options) {
        const { sum } = await this.repository
            .createQueryBuilder(this.alias)
            .select(`SUM(utx.${options.by})`, "sum")
            .getRawOne();
        return sum || 0;
    }
}
exports.UnconfirmedTransactionRepository = UnconfirmedTransactionRepository;
//# sourceMappingURL=unconfirmed-transactions-repository.js.map