"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenRepository = void 0;
const entities_1 = require("../entities");
const base_repository_1 = require("./base-repository");
class TokenRepository extends base_repository_1.BaseRepository {
    constructor(context) {
        super(entities_1.TokenEntity, "token", {
            context
        });
    }
    async find(options) {
        const { tokenIds } = options;
        return this.findBase(options, (filterQuery) => {
            if (options.where?.tokenId && tokenIds) {
                tokenIds.push(options.where.tokenId);
                delete options.where.tokenId;
            }
            if (tokenIds && tokenIds.length > 0) {
                filterQuery = filterQuery.andWhere(`${this.alias}.tokenId IN (:...tokenIds)`, {
                    tokenIds
                });
            }
            return filterQuery;
        });
    }
}
exports.TokenRepository = TokenRepository;
//# sourceMappingURL=token-repository.js.map