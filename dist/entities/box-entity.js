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
exports.BoxEntity = void 0;
const typeorm_1 = require("typeorm");
const asset_entity_1 = require("./asset-entity");
const input_entity_1 = require("./input-entity");
const transaction_entity_1 = require("./transaction-entity");
const box_entity_base_1 = require("./base-types/box-entity-base");
const box_register_entity_1 = require("./box-register-entity");
/*
  Schema
    TABLE node_outputs
    box_id                  VARCHAR(64) NOT NULL,
    tx_id                   VARCHAR(64) NOT NULL,
    header_id               VARCHAR(64) NOT NULL,
    value                   BIGINT      NOT NULL,
    creation_height         INTEGER     NOT NULL,
    settlement_height       INTEGER     NOT NULL,
    index                   INTEGER     NOT NULL,
    global_index            BIGINT      NOT NULL,
    ergo_tree               VARCHAR     NOT NULL,
    ergo_tree_template_hash VARCHAR(64) NOT NULL,
    address                 VARCHAR     NOT NULL,
    additional_registers    JSON        NOT NULL,
    timestamp               BIGINT      NOT NULL,
    main_chain              BOOLEAN     NOT NULL,
    PRIMARY KEY (box_id, header_id)
*/
let BoxEntity = class BoxEntity extends box_entity_base_1.BoxEntityBase {
    headerId;
    settlementHeight;
    globalIndex;
    timestamp;
    mainChain;
    spentBy;
    assets;
    registers;
    transaction;
};
__decorate([
    (0, typeorm_1.Column)({ name: "header_id" }),
    __metadata("design:type", String)
], BoxEntity.prototype, "headerId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "settlement_height" }),
    __metadata("design:type", Number)
], BoxEntity.prototype, "settlementHeight", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "global_index", type: "bigint" }),
    __metadata("design:type", BigInt)
], BoxEntity.prototype, "globalIndex", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "timestamp", type: "bigint" }),
    __metadata("design:type", BigInt)
], BoxEntity.prototype, "timestamp", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "main_chain", type: "boolean" }),
    __metadata("design:type", Boolean)
], BoxEntity.prototype, "mainChain", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => input_entity_1.InputEntity, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: "box_id" }),
    __metadata("design:type", input_entity_1.InputEntity)
], BoxEntity.prototype, "spentBy", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => asset_entity_1.AssetEntity, (asset) => asset.box),
    __metadata("design:type", Array)
], BoxEntity.prototype, "assets", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => box_register_entity_1.BoxRegisterEntity, (register) => register.box),
    __metadata("design:type", Array)
], BoxEntity.prototype, "registers", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => transaction_entity_1.TransactionEntity, (tx) => tx.inputs),
    (0, typeorm_1.JoinColumn)({ name: "tx_id" }),
    __metadata("design:type", transaction_entity_1.TransactionEntity)
], BoxEntity.prototype, "transaction", void 0);
BoxEntity = __decorate([
    (0, typeorm_1.Entity)({ name: "node_outputs" })
], BoxEntity);
exports.BoxEntity = BoxEntity;
//# sourceMappingURL=box-entity.js.map