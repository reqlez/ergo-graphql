"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderRepository = void 0;
const entities_1 = require("../entities");
const base_repository_1 = require("./base-repository");
class HeaderRepository extends base_repository_1.BaseRepository {
    constructor(context) {
        super(entities_1.HeaderEntity, "header", {
            context,
            defaults: {
                where: { mainChain: true },
                orderBy: { height: "DESC" }
            }
        });
    }
    async getMaxHeight() {
        const { height } = await this.repository
            .createQueryBuilder("header")
            .select("MAX(height)", "height")
            .getRawOne();
        return height;
    }
    async getLastHeaderId() {
        const { headerId } = await this.repository
            .createQueryBuilder("header")
            .select("id", "headerId")
            .orderBy("height", "DESC")
            .limit(1)
            .getRawOne();
        return headerId;
    }
}
exports.HeaderRepository = HeaderRepository;
//# sourceMappingURL=header-repository.js.map