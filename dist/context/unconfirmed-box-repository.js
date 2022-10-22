"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnconfirmedBoxRepository = void 0;
const core_1 = require("@fleet-sdk/core");
const lodash_1 = require("lodash");
const entities_1 = require("../entities");
const base_repository_1 = require("./base-repository");
class UnconfirmedBoxRepository extends base_repository_1.BaseRepository {
    constructor(context) {
        super(entities_1.UnconfirmedBoxEntity, "box", { context });
    }
    find(options) {
        const { tokenId } = options;
        if (options.where?.address) {
            options.where.ergoTree = core_1.ErgoAddress.fromBase58(options.where.address).ergoTree;
            delete options.where.address;
        }
        return this.findBase(options, (query) => {
            if (tokenId) {
                query = query
                    .leftJoin("box.assets", "asset", "asset.boxId = box.boxId")
                    .andWhere("asset.tokenId = :tokenId", { tokenId });
            }
            return query;
        });
    }
    async sum(options) {
        const query = this.repository
            .createQueryBuilder("box")
            .select("box.address", "address")
            .leftJoin(entities_1.UnconfirmedInputEntity, "input", "box.boxId = input.boxId")
            .andWhere("box.ergoTree IN (:...ergoTrees)")
            .andWhere("input.boxId IS NULL")
            .groupBy("box.address")
            .setParameters({
            ergoTrees: options.where.addresses.map((address) => core_1.ErgoAddress.fromBase58(address).ergoTree)
        });
        const nanoErgs = options.include.nanoErgs
            ? await query.addSelect("SUM(box.value)", "nanoErgs").getRawMany()
            : [];
        const assets = options.include.assets
            ? await query
                .leftJoin(entities_1.UnconfirmedAssetEntity, "asset", "box.boxId = asset.boxId")
                .leftJoin(entities_1.TokenEntity, "token", "asset.tokenId = token.tokenId")
                .andWhere("asset.tokenId IS NOT NULL")
                .addGroupBy("asset.tokenId")
                .addGroupBy("token.name")
                .addGroupBy("token.decimals")
                .addSelect("SUM(asset.value)", "amount")
                .addSelect("asset.tokenId", "tokenId")
                .addSelect("token.name", "name")
                .addSelect("token.decimals", "decimals")
                .getRawMany()
            : [];
        return (0, lodash_1.unionBy)(nanoErgs, assets, (x) => x.address)
            .map((x) => x.address)
            .map((address) => {
            return {
                address,
                nanoErgs: nanoErgs.find((x) => x.address === address)?.nanoErgs || 0,
                assets: assets
                    .filter((x) => x.address === address)
                    .map((x) => {
                    return {
                        tokenId: x.tokenId,
                        amount: x.amount,
                        name: x.name,
                        decimals: x.decimals
                    };
                })
            };
        });
    }
}
exports.UnconfirmedBoxRepository = UnconfirmedBoxRepository;
//# sourceMappingURL=unconfirmed-box-repository.js.map