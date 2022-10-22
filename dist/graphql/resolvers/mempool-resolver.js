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
exports.MempoolResolver = void 0;
const axios_1 = require("axios");
const graphql_1 = require("graphql");
const class_validator_1 = require("class-validator");
const type_graphql_1 = require("type-graphql");
const services_1 = require("../../services");
const utils_1 = require("../../utils");
const input_types_1 = require("../input-types");
const objects_1 = require("../objects");
const pagination_arguments_1 = require("./pagination-arguments");
const utils_2 = require("./utils");
const REDUNDANT_QUERY_MESSAGE = "Redundant query param: addresses and ergoTrees params can't be used together in the same query.";
let UnconfirmedTransactionArguments = class UnconfirmedTransactionArguments {
    /** @deprecated */
    transactionId;
    transactionIds;
    /** @deprecated */
    address;
    addresses;
};
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], UnconfirmedTransactionArguments.prototype, "transactionId", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [String], { nullable: true }),
    (0, class_validator_1.ArrayMaxSize)(20),
    __metadata("design:type", Array)
], UnconfirmedTransactionArguments.prototype, "transactionIds", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], UnconfirmedTransactionArguments.prototype, "address", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [String], { nullable: true }),
    (0, class_validator_1.ArrayMaxSize)(20),
    __metadata("design:type", Array)
], UnconfirmedTransactionArguments.prototype, "addresses", void 0);
UnconfirmedTransactionArguments = __decorate([
    (0, type_graphql_1.ArgsType)()
], UnconfirmedTransactionArguments);
let UnconfirmedBoxArguments = class UnconfirmedBoxArguments {
    boxId;
    transactionId;
    address;
    ergoTree;
    ergoTreeTemplateHash;
    tokenId;
};
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], UnconfirmedBoxArguments.prototype, "boxId", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], UnconfirmedBoxArguments.prototype, "transactionId", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => (0, class_validator_1.isDefined)(o.ergoTree)),
    (0, class_validator_1.IsEmpty)({ message: REDUNDANT_QUERY_MESSAGE }),
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], UnconfirmedBoxArguments.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => (0, class_validator_1.isDefined)(o.address)),
    (0, class_validator_1.IsEmpty)({ message: REDUNDANT_QUERY_MESSAGE }),
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], UnconfirmedBoxArguments.prototype, "ergoTree", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], UnconfirmedBoxArguments.prototype, "ergoTreeTemplateHash", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], UnconfirmedBoxArguments.prototype, "tokenId", void 0);
UnconfirmedBoxArguments = __decorate([
    (0, type_graphql_1.ArgsType)()
], UnconfirmedBoxArguments);
let UnconfirmedAddressesQueryArgs = class UnconfirmedAddressesQueryArgs {
    addresses;
};
__decorate([
    (0, type_graphql_1.Field)(() => [String], { nullable: false }),
    (0, class_validator_1.ArrayMaxSize)(20),
    __metadata("design:type", Array)
], UnconfirmedAddressesQueryArgs.prototype, "addresses", void 0);
UnconfirmedAddressesQueryArgs = __decorate([
    (0, type_graphql_1.ArgsType)()
], UnconfirmedAddressesQueryArgs);
let UnconfirmedInputsQueryArgs = class UnconfirmedInputsQueryArgs {
    boxId;
    transactionId;
};
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], UnconfirmedInputsQueryArgs.prototype, "boxId", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], UnconfirmedInputsQueryArgs.prototype, "transactionId", void 0);
UnconfirmedInputsQueryArgs = __decorate([
    (0, type_graphql_1.ArgsType)()
], UnconfirmedInputsQueryArgs);
let MempoolResolver = class MempoolResolver {
    async mempool(info) {
        info.cacheControl.setCacheHint({ maxAge: 0 });
        return {};
    }
    async size(context) {
        return await context.repository.unconfirmedTransactions.sum({ by: "size" });
    }
    async transactionsCount(context) {
        return await context.repository.unconfirmedTransactions.count();
    }
    async transactions({ skip, take }, { transactionId, transactionIds, address, addresses }, context, info) {
        return context.repository.unconfirmedTransactions.find({
            resolverInfo: info,
            where: (0, utils_1.removeUndefined)({ transactionId }),
            address,
            addresses,
            transactionIds,
            skip,
            take
        });
    }
    async boxes({ boxId, transactionId, address, ergoTree, ergoTreeTemplateHash, tokenId }, { skip, take }, context, info) {
        return context.repository.unconfirmedBoxes.find({
            resolverInfo: info,
            where: (0, utils_1.removeUndefined)({ boxId, transactionId, address, ergoTree, ergoTreeTemplateHash }),
            tokenId,
            skip,
            take
        });
    }
    async addresses({ addresses }, context, info) {
        const balances = (0, utils_2.isFieldSelected)(info, "balance")
            ? await context.repository.unconfirmedBoxes.sum({
                where: { addresses },
                include: {
                    nanoErgs: (0, utils_2.isFieldSelected)(info, "balance.nanoErgs"),
                    assets: (0, utils_2.isFieldSelected)(info, "balance.assets")
                }
            })
            : [];
        return addresses.map((address) => {
            return {
                address,
                balance: balances.find((b) => b.address === address) || { nanoErgs: 0, assets: [] }
            };
        });
    }
    async inputs({ boxId, transactionId }, { skip, take }, context, info) {
        return context.repository.unconfirmedInputs.find({
            resolverInfo: info,
            where: (0, utils_1.removeUndefined)({ boxId, transactionId }),
            skip,
            take
        });
    }
    async checkTransaction(signedTransaction) {
        try {
            const response = await services_1.nodeService.checkTransaction(signedTransaction);
            return response.data;
        }
        catch (e) {
            if (e instanceof axios_1.AxiosError) {
                if (e.response?.data?.error === 400) {
                    throw new graphql_1.GraphQLError(e.response?.data?.detail);
                }
            }
            console.error(e);
            throw new graphql_1.GraphQLError("Unknown error");
        }
    }
    async submitTransaction(signedTransaction) {
        try {
            const response = await services_1.nodeService.submitTransaction(signedTransaction);
            return response.data;
        }
        catch (e) {
            if (e instanceof axios_1.AxiosError) {
                if (e.response?.data?.error === 400) {
                    throw new graphql_1.GraphQLError(e.response?.data?.detail);
                }
            }
            console.error(e);
            throw new graphql_1.GraphQLError("Unknown error");
        }
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => objects_1.Mempool),
    __param(0, (0, type_graphql_1.Info)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MempoolResolver.prototype, "mempool", null);
__decorate([
    (0, type_graphql_1.FieldResolver)(),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MempoolResolver.prototype, "size", null);
__decorate([
    (0, type_graphql_1.FieldResolver)(),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MempoolResolver.prototype, "transactionsCount", null);
__decorate([
    (0, type_graphql_1.FieldResolver)(),
    __param(0, (0, type_graphql_1.Args)({ validate: true })),
    __param(1, (0, type_graphql_1.Args)({ validate: true })),
    __param(2, (0, type_graphql_1.Ctx)()),
    __param(3, (0, type_graphql_1.Info)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_arguments_1.PaginationArguments,
        UnconfirmedTransactionArguments, Object, Object]),
    __metadata("design:returntype", Promise)
], MempoolResolver.prototype, "transactions", null);
__decorate([
    (0, type_graphql_1.FieldResolver)(),
    __param(0, (0, type_graphql_1.Args)({ validate: true })),
    __param(1, (0, type_graphql_1.Args)({ validate: true })),
    __param(2, (0, type_graphql_1.Ctx)()),
    __param(3, (0, type_graphql_1.Info)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UnconfirmedBoxArguments,
        pagination_arguments_1.PaginationArguments, Object, Object]),
    __metadata("design:returntype", Promise)
], MempoolResolver.prototype, "boxes", null);
__decorate([
    (0, type_graphql_1.FieldResolver)(),
    __param(0, (0, type_graphql_1.Args)({ validate: true })),
    __param(1, (0, type_graphql_1.Ctx)()),
    __param(2, (0, type_graphql_1.Info)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UnconfirmedAddressesQueryArgs, Object, Object]),
    __metadata("design:returntype", Promise)
], MempoolResolver.prototype, "addresses", null);
__decorate([
    (0, type_graphql_1.FieldResolver)(),
    __param(0, (0, type_graphql_1.Args)()),
    __param(1, (0, type_graphql_1.Args)({ validate: true })),
    __param(2, (0, type_graphql_1.Ctx)()),
    __param(3, (0, type_graphql_1.Info)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UnconfirmedInputsQueryArgs,
        pagination_arguments_1.PaginationArguments, Object, Object]),
    __metadata("design:returntype", Promise)
], MempoolResolver.prototype, "inputs", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => String),
    __param(0, (0, type_graphql_1.Arg)("signedTransaction")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [input_types_1.SignedTransactionInput]),
    __metadata("design:returntype", Promise)
], MempoolResolver.prototype, "checkTransaction", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => String),
    __param(0, (0, type_graphql_1.Arg)("signedTransaction")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [input_types_1.SignedTransactionInput]),
    __metadata("design:returntype", Promise)
], MempoolResolver.prototype, "submitTransaction", null);
MempoolResolver = __decorate([
    (0, type_graphql_1.Resolver)(objects_1.Mempool)
], MempoolResolver);
exports.MempoolResolver = MempoolResolver;
//# sourceMappingURL=mempool-resolver.js.map