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
exports.InputEntity = void 0;
const typeorm_1 = require("typeorm");
const transaction_entity_1 = require("./transaction-entity");
const input_entity_base_1 = require("./base-types/input-entity-base");
/*
  Schema
    TABLE node_inputs
    box_id      VARCHAR(64) NOT NULL,
    tx_id       VARCHAR(64) NOT NULL,
    header_id   VARCHAR(64) NOT NULL,
    proof_bytes VARCHAR,
    extension   JSON        NOT NULL,
    index       INTEGER     NOT NULL,
    main_chain  BOOLEAN     NOT NULL,
    PRIMARY KEY (box_id, header_id)
*/
let InputEntity = class InputEntity extends input_entity_base_1.InputEntityBase {
    headerId;
    mainChain;
    transaction;
};
__decorate([
    (0, typeorm_1.Column)({ name: "header_id" }),
    __metadata("design:type", String)
], InputEntity.prototype, "headerId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "main_chain" }),
    __metadata("design:type", Boolean)
], InputEntity.prototype, "mainChain", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => transaction_entity_1.TransactionEntity, (tx) => tx.inputs),
    (0, typeorm_1.JoinColumn)({ name: "tx_id" }),
    __metadata("design:type", transaction_entity_1.TransactionEntity)
], InputEntity.prototype, "transaction", void 0);
InputEntity = __decorate([
    (0, typeorm_1.Entity)({ name: "node_inputs" })
], InputEntity);
exports.InputEntity = InputEntity;
//# sourceMappingURL=input-entity.js.map