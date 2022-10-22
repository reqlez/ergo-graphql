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
exports.UnconfirmedTransactionEntity = void 0;
const typeorm_1 = require("typeorm");
const transaction_entity_base_1 = require("./base-types/transaction-entity-base");
const unconfirmed_box_entity_1 = require("./unconfirmed-box-entity");
const unconfirmed_data_input_entity_1 = require("./unconfirmed-data-input-entity");
const unconfirmed_input_entity_1 = require("./unconfirmed-input-entity");
/*
  Schema
    TABLE node_u_transactions
    id                 VARCHAR(64) PRIMARY KEY,
    creation_timestamp BIGINT  NOT NULL,
    size               INTEGER NOT NULL
*/
let UnconfirmedTransactionEntity = class UnconfirmedTransactionEntity extends transaction_entity_base_1.TransactionEntityBase {
    timestamp;
    inputs;
    outputs;
    dataInputs;
};
__decorate([
    (0, typeorm_1.Column)({ name: "creation_timestamp", type: "bigint" }),
    __metadata("design:type", BigInt)
], UnconfirmedTransactionEntity.prototype, "timestamp", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => unconfirmed_input_entity_1.UnconfirmedInputEntity, (input) => input.transaction),
    __metadata("design:type", Array)
], UnconfirmedTransactionEntity.prototype, "inputs", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => unconfirmed_box_entity_1.UnconfirmedBoxEntity, (box) => box.transaction),
    __metadata("design:type", Array)
], UnconfirmedTransactionEntity.prototype, "outputs", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => unconfirmed_data_input_entity_1.UnconfirmedDataInputEntity, (input) => input.transaction),
    __metadata("design:type", Array)
], UnconfirmedTransactionEntity.prototype, "dataInputs", void 0);
UnconfirmedTransactionEntity = __decorate([
    (0, typeorm_1.Entity)({ name: "node_u_transactions" })
], UnconfirmedTransactionEntity);
exports.UnconfirmedTransactionEntity = UnconfirmedTransactionEntity;
//# sourceMappingURL=unconfirmed-transaction-entity.js.map