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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Block = void 0;
const type_graphql_1 = require("type-graphql");
const header_1 = require("./header");
let Block = class Block {
    headerId;
    timestamp;
    height;
    difficulty;
    blockSize;
    blockCoins;
    blockMiningTime;
    txsCount;
    txsSize;
    minerAddress;
    minerReward;
    minerRevenue;
    blockFee;
    blockChainTotalSize;
    totalTxsCount;
    totalCoinsIssued;
    totalMiningTime;
    totalFees;
    totalMinersReward;
    totalCoinsInTxs;
    maxTxGix;
    maxBoxGix;
    mainChain;
    header;
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Block.prototype, "headerId", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", BigInt)
], Block.prototype, "timestamp", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], Block.prototype, "height", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", BigInt)
], Block.prototype, "difficulty", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], Block.prototype, "blockSize", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", BigInt)
], Block.prototype, "blockCoins", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", BigInt)
], Block.prototype, "blockMiningTime", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], Block.prototype, "txsCount", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], Block.prototype, "txsSize", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Block.prototype, "minerAddress", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", BigInt)
], Block.prototype, "minerReward", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", BigInt)
], Block.prototype, "minerRevenue", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", BigInt)
], Block.prototype, "blockFee", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", BigInt)
], Block.prototype, "blockChainTotalSize", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", BigInt)
], Block.prototype, "totalTxsCount", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", BigInt)
], Block.prototype, "totalCoinsIssued", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", BigInt)
], Block.prototype, "totalMiningTime", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", BigInt)
], Block.prototype, "totalFees", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", BigInt)
], Block.prototype, "totalMinersReward", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", BigInt)
], Block.prototype, "totalCoinsInTxs", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", BigInt)
], Block.prototype, "maxTxGix", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", BigInt)
], Block.prototype, "maxBoxGix", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Boolean)
], Block.prototype, "mainChain", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => header_1.Header),
    __metadata("design:type", header_1.Header)
], Block.prototype, "header", void 0);
Block = __decorate([
    (0, type_graphql_1.ObjectType)({ simpleResolvers: true })
], Block);
exports.Block = Block;
//# sourceMappingURL=block.js.map