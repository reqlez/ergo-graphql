"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EpochsRepository = void 0;
const entities_1 = require("../entities");
const base_repository_1 = require("./base-repository");
class EpochsRepository extends base_repository_1.BaseRepository {
    constructor(context) {
        super(entities_1.EpochsParameterEntity, "epochs", {
            context,
            defaults: {
                orderBy: { height: "DESC" }
            }
        });
    }
    async getLast(info) {
        return await this.first({ resolverInfo: info });
    }
}
exports.EpochsRepository = EpochsRepository;
//# sourceMappingURL=epochs-repository.js.map