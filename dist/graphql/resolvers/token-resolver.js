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
exports.TokenResolver = void 0;
const type_graphql_1 = require("type-graphql");
const objects_1 = require("../objects");
const utils_1 = require("../../utils");
const pagination_arguments_1 = require("./pagination-arguments");
const class_validator_1 = require("class-validator");
let TokensQueryArgs = class TokensQueryArgs {
    /** @deprecated */
    tokenId;
    tokenIds;
    boxId;
    name;
};
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], TokensQueryArgs.prototype, "tokenId", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [String], { nullable: true }),
    (0, class_validator_1.ArrayMaxSize)(20),
    __metadata("design:type", Array)
], TokensQueryArgs.prototype, "tokenIds", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], TokensQueryArgs.prototype, "boxId", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], TokensQueryArgs.prototype, "name", void 0);
TokensQueryArgs = __decorate([
    (0, type_graphql_1.ArgsType)()
], TokensQueryArgs);
let TokenResolver = class TokenResolver {
    async tokens({ tokenId, tokenIds, boxId, name }, { skip, take }, context, info) {
        return context.repository.tokens.find({
            resolverInfo: info,
            where: (0, utils_1.removeUndefined)({ boxId, name, tokenId }),
            tokenIds,
            skip,
            take
        });
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [objects_1.Token]),
    __param(0, (0, type_graphql_1.Args)({ validate: true })),
    __param(1, (0, type_graphql_1.Args)({ validate: true })),
    __param(2, (0, type_graphql_1.Ctx)()),
    __param(3, (0, type_graphql_1.Info)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TokensQueryArgs,
        pagination_arguments_1.PaginationArguments, Object, Object]),
    __metadata("design:returntype", Promise)
], TokenResolver.prototype, "tokens", null);
TokenResolver = __decorate([
    (0, type_graphql_1.Resolver)(objects_1.Token)
], TokenResolver);
exports.TokenResolver = TokenResolver;
//# sourceMappingURL=token-resolver.js.map