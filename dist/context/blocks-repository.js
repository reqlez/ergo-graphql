"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlocksRepository = void 0;
const entities_1 = require("../entities");
const base_repository_1 = require("./base-repository");
class BlocksRepository extends base_repository_1.BaseRepository {
    constructor(context) {
        super(entities_1.BlockInfoEntity, "block", {
            context,
            defaults: {
                where: { mainChain: true },
                orderBy: { height: "DESC" }
            }
        });
    }
    async find(options) {
        const { minHeight, maxHeight } = options;
        return this.findBase(options, (filterQuery) => {
            if (minHeight) {
                filterQuery = filterQuery.andWhere(`${this.alias}.height >= :minHeight`, { minHeight });
            }
            if (maxHeight) {
                filterQuery = filterQuery.andWhere(`${this.alias}.height <= :maxHeight`, { maxHeight });
            }
            return filterQuery;
        });
    }
}
exports.BlocksRepository = BlocksRepository;
//# sourceMappingURL=blocks-repository.js.map