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
exports.UnconfirmedInputEntity = void 0;
const typeorm_1 = require("typeorm");
const unconfirmed_transaction_entity_1 = require("./unconfirmed-transaction-entity");
const input_entity_base_1 = require("./base-types/input-entity-base");
/*
  Schema
    box_id      VARCHAR(64) NOT NULL,
    tx_id       VARCHAR(64) NOT NULL REFERENCES node_u_transactions (id) ON DELETE CASCADE,
    index       INTEGER     NOT NULL,
    proof_bytes VARCHAR,
    extension   JSON        NOT NULL,
    PRIMARY KEY (box_id, tx_id)
*/
let UnconfirmedInputEntity = class UnconfirmedInputEntity extends input_entity_base_1.InputEntityBase {
    transaction;
};
__decorate([
    (0, typeorm_1.ManyToOne)(() => unconfirmed_transaction_entity_1.UnconfirmedTransactionEntity, (tx) => tx.inputs, { onDelete: "CASCADE" }),
    (0, typeorm_1.JoinColumn)({ name: "tx_id" }),
    __metadata("design:type", unconfirmed_transaction_entity_1.UnconfirmedTransactionEntity)
], UnconfirmedInputEntity.prototype, "transaction", void 0);
UnconfirmedInputEntity = __decorate([
    (0, typeorm_1.Entity)({ name: "node_u_inputs" })
], UnconfirmedInputEntity);
exports.UnconfirmedInputEntity = UnconfirmedInputEntity;
//# sourceMappingURL=unconfirmed-input-entity.js.map