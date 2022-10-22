"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnconfirmedInputRepository = void 0;
const entities_1 = require("../entities");
const base_repository_1 = require("./base-repository");
class UnconfirmedInputRepository extends base_repository_1.BaseRepository {
    constructor(context) {
        super(entities_1.UnconfirmedInputEntity, "uinput", { context });
    }
    async getUnconfirmedInputBoxIds(filteredBoxIds) {
        const boxIds = await this.repository
            .createQueryBuilder("uinput")
            .select("uinput.boxId", "boxId")
            .where("uinput.boxId IN (:...filteredBoxIds)", { filteredBoxIds })
            .getRawMany();
        return boxIds.map((item) => item.boxId);
    }
}
exports.UnconfirmedInputRepository = UnconfirmedInputRepository;
//# sourceMappingURL=unconfirmed-input-repository.js.map