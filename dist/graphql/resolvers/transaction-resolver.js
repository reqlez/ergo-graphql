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
exports.TransactionResolver = void 0;
const type_graphql_1 = require("type-graphql");
const transaction_1 = require("../objects/transaction");
const utils_1 = require("../../utils");
const pagination_arguments_1 = require("./pagination-arguments");
const class_validator_1 = require("class-validator");
let TransactionArguments = class TransactionArguments {
    /** @deprecated */
    transactionId;
    transactionIds;
    headerId;
    inclusionHeight;
    /** @deprecated */
    address;
    addresses;
    minHeight;
    maxHeight;
};
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], TransactionArguments.prototype, "transactionId", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [String], { nullable: true }),
    (0, class_validator_1.ArrayMaxSize)(20),
    __metadata("design:type", Array)
], TransactionArguments.prototype, "transactionIds", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], TransactionArguments.prototype, "headerId", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], TransactionArguments.prototype, "inclusionHeight", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], TransactionArguments.prototype, "address", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [String], { nullable: true }),
    (0, class_validator_1.ArrayMaxSize)(20),
    __metadata("design:type", Array)
], TransactionArguments.prototype, "addresses", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], TransactionArguments.prototype, "minHeight", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], TransactionArguments.prototype, "maxHeight", void 0);
TransactionArguments = __decorate([
    (0, type_graphql_1.ArgsType)()
], TransactionArguments);
let TransactionResolver = class TransactionResolver {
    async transactions({ transactionId, transactionIds, headerId, inclusionHeight, address, addresses, minHeight, maxHeight }, { skip, take }, context, info) {
        return await context.repository.transactions.find({
            resolverInfo: info,
            where: (0, utils_1.removeUndefined)({
                transactionId,
                headerId,
                inclusionHeight
            }),
            transactionIds,
            address,
            addresses,
            minHeight,
            maxHeight,
            skip,
            take
        });
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [transaction_1.Transaction]),
    __param(0, (0, type_graphql_1.Args)({ validate: true })),
    __param(1, (0, type_graphql_1.Args)({ validate: true })),
    __param(2, (0, type_graphql_1.Ctx)()),
    __param(3, (0, type_graphql_1.Info)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TransactionArguments,
        pagination_arguments_1.PaginationArguments, Object, Object]),
    __metadata("design:returntype", Promise)
], TransactionResolver.prototype, "transactions", null);
TransactionResolver = __decorate([
    (0, type_graphql_1.Resolver)(transaction_1.Transaction)
], TransactionResolver);
exports.TransactionResolver = TransactionResolver;
//# sourceMappingURL=transaction-resolver.js.map