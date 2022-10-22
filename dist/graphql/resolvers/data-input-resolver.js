"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataInputResolver = void 0;
const type_graphql_1 = require("type-graphql");
const data_input_1 = require("../objects/data-input");
const utils_1 = require("../../utils");
const pagination_arguments_1 = require("./pagination-arguments");
let DataInputsQueryArgs = class DataInputsQueryArgs {
    transactionId;
    boxId;
    headerId;
};
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], DataInputsQueryArgs.prototype, "transactionId", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], DataInputsQueryArgs.prototype, "boxId", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], DataInputsQueryArgs.prototype, "headerId", void 0);
DataInputsQueryArgs = __decorate([
    (0, type_graphql_1.ArgsType)()
], DataInputsQueryArgs);
let DataInputResolver = class DataInputResolver {
    async dataInputs({ transactionId, boxId, headerId }, { skip, take }, context, info) {
        return context.repository.dataInputs.find({
            resolverInfo: info,
            where: (0, utils_1.removeUndefined)({
                transactionId,
                boxId,
                headerId
            }),
            skip,
            take
        });
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [data_input_1.DataInput]),
    __param(0, (0, type_graphql_1.Args)()),
    __param(1, (0, type_graphql_1.Args)({ validate: true })),
    __param(2, (0, type_graphql_1.Ctx)()),
    __param(3, (0, type_graphql_1.Info)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [DataInputsQueryArgs,
        pagination_arguments_1.PaginationArguments, Object, Object]),
    __metadata("design:returntype", Promise)
], DataInputResolver.prototype, "dataInputs", null);
DataInputResolver = __decorate([
    (0, type_graphql_1.Resolver)(data_input_1.DataInput)
], DataInputResolver);
exports.DataInputResolver = DataInputResolver;
//# sourceMappingURL=data-input-resolver.js.map