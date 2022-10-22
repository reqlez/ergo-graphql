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
exports.DataInputEntity = void 0;
const typeorm_1 = require("typeorm");
const box_entity_1 = require("./box-entity");
const transaction_entity_1 = require("./transaction-entity");
const data_input_entity_base_1 = require("./base-types/data-input-entity-base");
/*
  Schema
    TABLE node_data_inputs
    box_id      VARCHAR(64) NOT NULL,
    tx_id       VARCHAR(64) NOT NULL,
    header_id   VARCHAR(64) NOT NULL,
    index       INTEGER     NOT NULL,
    main_chain  BOOLEAN     NOT NULL,
*/
let DataInputEntity = class DataInputEntity extends data_input_entity_base_1.DataInputEntityBase {
    headerId;
    mainChain;
    box;
    transaction;
};
__decorate([
    (0, typeorm_1.Column)({ name: "header_id" }),
    __metadata("design:type", String)
], DataInputEntity.prototype, "headerId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "main_chain" }),
    __metadata("design:type", Boolean)
], DataInputEntity.prototype, "mainChain", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => box_entity_1.BoxEntity),
    (0, typeorm_1.JoinColumn)({ name: "box_id" }),
    __metadata("design:type", box_entity_1.BoxEntity)
], DataInputEntity.prototype, "box", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => transaction_entity_1.TransactionEntity, (tx) => tx.dataInputs),
    (0, typeorm_1.JoinColumn)({ name: "tx_id" }),
    __metadata("design:type", transaction_entity_1.TransactionEntity)
], DataInputEntity.prototype, "transaction", void 0);
DataInputEntity = __decorate([
    (0, typeorm_1.Entity)({ name: "node_data_inputs" })
], DataInputEntity);
exports.DataInputEntity = DataInputEntity;
//# sourceMappingURL=data-input-entity.js.map