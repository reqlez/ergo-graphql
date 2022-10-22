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
exports.UnconfirmedDataInputEntity = void 0;
const typeorm_1 = require("typeorm");
const data_input_entity_base_1 = require("./base-types/data-input-entity-base");
const unconfirmed_transaction_entity_1 = require("./unconfirmed-transaction-entity");
/*
  Schema
    box_id      VARCHAR(64) NOT NULL,
    tx_id       VARCHAR(64) NOT NULL REFERENCES node_u_transactions (id) ON DELETE CASCADE,
    index       INTEGER     NOT NULL,
    PRIMARY KEY (box_id, tx_id)
*/
let UnconfirmedDataInputEntity = class UnconfirmedDataInputEntity extends data_input_entity_base_1.DataInputEntityBase {
    transaction;
};
__decorate([
    (0, typeorm_1.ManyToOne)(() => unconfirmed_transaction_entity_1.UnconfirmedTransactionEntity, (tx) => tx.dataInputs, { onDelete: "CASCADE" }),
    (0, typeorm_1.JoinColumn)({ name: "tx_id" }),
    __metadata("design:type", unconfirmed_transaction_entity_1.UnconfirmedTransactionEntity)
], UnconfirmedDataInputEntity.prototype, "transaction", void 0);
UnconfirmedDataInputEntity = __decorate([
    (0, typeorm_1.Entity)({ name: "node_u_data_inputs" })
], UnconfirmedDataInputEntity);
exports.UnconfirmedDataInputEntity = UnconfirmedDataInputEntity;
//# sourceMappingURL=unconfirmed-data-input-entity.js.map