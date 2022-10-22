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
exports.StateResolver = void 0;
const type_graphql_1 = require("type-graphql");
const graphql_1 = require("graphql");
const objects_1 = require("../objects");
const services_1 = require("../../services");
const axios_1 = require("axios");
const utils_1 = require("./utils");
let StateResolver = class StateResolver {
    async state(info) {
        const networkSelected = (0, utils_1.isFieldSelected)(info, "network");
        const difficultySelected = (0, utils_1.isFieldSelected)(info, "difficulty");
        const stateObject = {};
        if (networkSelected || difficultySelected) {
            try {
                const response = await services_1.nodeService.getNodeInfo();
                if (networkSelected) {
                    stateObject["network"] = response.data.network;
                }
                if (difficultySelected) {
                    stateObject["difficulty"] = response.data.difficulty;
                }
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
        return stateObject;
    }
    async blockId(context) {
        return await context.repository.headers.getLastHeaderId();
    }
    async height(context) {
        return await context.repository.headers.getMaxHeight();
    }
    async boxGlobalIndex(context) {
        return await context.repository.boxes.getMaxGlobalIndex();
    }
    async transactionGlobalIndex(context) {
        return await context.repository.transactions.getMaxGlobalIndex();
    }
    async params(context, info) {
        return await context.repository.epochs.getLast(info);
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => objects_1.State),
    __param(0, (0, type_graphql_1.Info)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StateResolver.prototype, "state", null);
__decorate([
    (0, type_graphql_1.FieldResolver)(),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StateResolver.prototype, "blockId", null);
__decorate([
    (0, type_graphql_1.FieldResolver)(),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StateResolver.prototype, "height", null);
__decorate([
    (0, type_graphql_1.FieldResolver)(),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StateResolver.prototype, "boxGlobalIndex", null);
__decorate([
    (0, type_graphql_1.FieldResolver)(),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StateResolver.prototype, "transactionGlobalIndex", null);
__decorate([
    (0, type_graphql_1.FieldResolver)(),
    __param(0, (0, type_graphql_1.Ctx)()),
    __param(1, (0, type_graphql_1.Info)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], StateResolver.prototype, "params", null);
StateResolver = __decorate([
    (0, type_graphql_1.Resolver)(objects_1.State)
], StateResolver);
exports.StateResolver = StateResolver;
//# sourceMappingURL=state-resolver.js.map