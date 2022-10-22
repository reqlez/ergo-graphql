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
exports.BlockResolver = void 0;
const type_graphql_1 = require("type-graphql");
const utils_1 = require("../../utils");
const block_1 = require("../objects/block");
const pagination_arguments_1 = require("./pagination-arguments");
let BlockQueryArgs = class BlockQueryArgs extends pagination_arguments_1.PaginationArguments {
    headerId;
    height;
    minHeight;
    maxHeight;
    take = 10;
};
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], BlockQueryArgs.prototype, "headerId", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], BlockQueryArgs.prototype, "height", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], BlockQueryArgs.prototype, "minHeight", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], BlockQueryArgs.prototype, "maxHeight", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Int, { defaultValue: 10 }),
    __metadata("design:type", Object)
], BlockQueryArgs.prototype, "take", void 0);
BlockQueryArgs = __decorate([
    (0, type_graphql_1.ArgsType)()
], BlockQueryArgs);
let BlockResolver = class BlockResolver {
    async blocks({ headerId, height, minHeight, maxHeight, skip, take }, context, info) {
        return context.repository.blockInfo.find({
            resolverInfo: info,
            where: (0, utils_1.removeUndefined)({ headerId, height }),
            minHeight,
            maxHeight,
            take,
            skip
        });
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [block_1.Block]),
    __param(0, (0, type_graphql_1.Args)({ validate: true })),
    __param(1, (0, type_graphql_1.Ctx)()),
    __param(2, (0, type_graphql_1.Info)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [BlockQueryArgs, Object, Object]),
    __metadata("design:returntype", Promise)
], BlockResolver.prototype, "blocks", null);
BlockResolver = __decorate([
    (0, type_graphql_1.Resolver)(block_1.Block)
], BlockResolver);
exports.BlockResolver = BlockResolver;
//# sourceMappingURL=block-resolver.js.map