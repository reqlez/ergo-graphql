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
exports.BlockInfoEntity = void 0;
const typeorm_1 = require("typeorm");
const header_entity_1 = require("./header-entity");
/*
  Schema
    header_id              VARCHAR(64) PRIMARY KEY REFERENCES node_headers (id),
    timestamp              BIGINT  NOT NULL,
    height                 INTEGER NOT NULL,
    difficulty             BIGINT  NOT NULL,
    block_size             INTEGER NOT NULL,
    block_coins            BIGINT  NOT NULL,
    block_mining_time      BIGINT,
    txs_count              INTEGER NOT NULL,
    txs_size               INTEGER NOT NULL,
    miner_address          VARCHAR NOT NULL,
    miner_reward           BIGINT  NOT NULL,
    miner_revenue          BIGINT  NOT NULL,
    block_fee              BIGINT  NOT NULL,
    block_chain_total_size BIGINT  NOT NULL,
    total_txs_count        BIGINT  NOT NULL,
    total_coins_issued     BIGINT  NOT NULL,
    total_mining_time      BIGINT  NOT NULL,
    total_fees             BIGINT  NOT NULL,
    total_miners_reward    BIGINT  NOT NULL,
    total_coins_in_txs     BIGINT  NOT NULL,
    max_tx_gix             BIGINT  NOT NULL,
    max_box_gix            BIGINT  NOT NULL,
    main_chain             BOOLEAN NOT NULL
    PRIMARY KEY (header_id)
*/
let BlockInfoEntity = class BlockInfoEntity extends typeorm_1.BaseEntity {
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
    (0, typeorm_1.PrimaryColumn)({ name: "header_id" }),
    __metadata("design:type", String)
], BlockInfoEntity.prototype, "headerId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "timestamp", type: "bigint" }),
    __metadata("design:type", BigInt)
], BlockInfoEntity.prototype, "timestamp", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "height" }),
    __metadata("design:type", Number)
], BlockInfoEntity.prototype, "height", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "difficulty", type: "bigint" }),
    __metadata("design:type", BigInt)
], BlockInfoEntity.prototype, "difficulty", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "block_size" }),
    __metadata("design:type", Number)
], BlockInfoEntity.prototype, "blockSize", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "block_coins", type: "bigint" }),
    __metadata("design:type", BigInt)
], BlockInfoEntity.prototype, "blockCoins", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "block_mining_time", type: "bigint", nullable: true }),
    __metadata("design:type", BigInt)
], BlockInfoEntity.prototype, "blockMiningTime", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "txs_count" }),
    __metadata("design:type", Number)
], BlockInfoEntity.prototype, "txsCount", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "txs_size" }),
    __metadata("design:type", Number)
], BlockInfoEntity.prototype, "txsSize", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "miner_address" }),
    __metadata("design:type", String)
], BlockInfoEntity.prototype, "minerAddress", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "miner_reward", type: "bigint" }),
    __metadata("design:type", BigInt)
], BlockInfoEntity.prototype, "minerReward", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "miner_revenue", type: "bigint" }),
    __metadata("design:type", BigInt)
], BlockInfoEntity.prototype, "minerRevenue", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "block_fee", type: "bigint" }),
    __metadata("design:type", BigInt)
], BlockInfoEntity.prototype, "blockFee", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "block_chain_total_size", type: "bigint" }),
    __metadata("design:type", BigInt)
], BlockInfoEntity.prototype, "blockChainTotalSize", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "total_txs_count", type: "bigint" }),
    __metadata("design:type", BigInt)
], BlockInfoEntity.prototype, "totalTxsCount", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "total_coins_issued", type: "bigint" }),
    __metadata("design:type", BigInt)
], BlockInfoEntity.prototype, "totalCoinsIssued", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "total_mining_time", type: "bigint" }),
    __metadata("design:type", BigInt)
], BlockInfoEntity.prototype, "totalMiningTime", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "total_fees", type: "bigint" }),
    __metadata("design:type", BigInt)
], BlockInfoEntity.prototype, "totalFees", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "total_miners_reward", type: "bigint" }),
    __metadata("design:type", BigInt)
], BlockInfoEntity.prototype, "totalMinersReward", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "total_coins_in_txs", type: "bigint" }),
    __metadata("design:type", BigInt)
], BlockInfoEntity.prototype, "totalCoinsInTxs", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "max_tx_gix", type: "bigint" }),
    __metadata("design:type", BigInt)
], BlockInfoEntity.prototype, "maxTxGix", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "max_box_gix", type: "bigint" }),
    __metadata("design:type", BigInt)
], BlockInfoEntity.prototype, "maxBoxGix", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "main_chain" }),
    __metadata("design:type", Boolean)
], BlockInfoEntity.prototype, "mainChain", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => header_entity_1.HeaderEntity),
    (0, typeorm_1.JoinColumn)({ name: "header_id" }),
    __metadata("design:type", header_entity_1.HeaderEntity)
], BlockInfoEntity.prototype, "header", void 0);
BlockInfoEntity = __decorate([
    (0, typeorm_1.Entity)({ name: "blocks_info" })
], BlockInfoEntity);
exports.BlockInfoEntity = BlockInfoEntity;
//# sourceMappingURL=block-info-entity.js.map