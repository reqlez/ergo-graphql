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
exports.InputResolver = void 0;
const type_graphql_1 = require("type-graphql");
const objects_1 = require("../objects");
const utils_1 = require("../../utils");
const pagination_arguments_1 = require("./pagination-arguments");
let InputsQueryArgs = class InputsQueryArgs {
    transactionId;
    boxId;
    headerId;
};
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], InputsQueryArgs.prototype, "transactionId", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], InputsQueryArgs.prototype, "boxId", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], InputsQueryArgs.prototype, "headerId", void 0);
InputsQueryArgs = __decorate([
    (0, type_graphql_1.ArgsType)()
], InputsQueryArgs);
let InputResolver = class InputResolver {
    async inputs({ transactionId, boxId, headerId }, { skip, take }, context, info) {
        return context.repository.inputs.find({
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
    (0, type_graphql_1.Query)(() => [objects_1.Input]),
    __param(0, (0, type_graphql_1.Args)()),
    __param(1, (0, type_graphql_1.Args)({ validate: true })),
    __param(2, (0, type_graphql_1.Ctx)()),
    __param(3, (0, type_graphql_1.Info)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [InputsQueryArgs,
        pagination_arguments_1.PaginationArguments, Object, Object]),
    __metadata("design:returntype", Promise)
], InputResolver.prototype, "inputs", null);
InputResolver = __decorate([
    (0, type_graphql_1.Resolver)(objects_1.Input)
], InputResolver);
exports.InputResolver = InputResolver;
//# sourceMappingURL=input-resolver.js.map