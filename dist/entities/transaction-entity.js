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
exports.TransactionEntity = void 0;
const typeorm_1 = require("typeorm");
const box_entity_1 = require("./box-entity");
const data_input_entity_1 = require("./data-input-entity");
const input_entity_1 = require("./input-entity");
const transaction_entity_base_1 = require("./base-types/transaction-entity-base");
const typeorm_graphql_loader_1 = require("@mando75/typeorm-graphql-loader");
/*
  Schema
    TABLE node_transactions
    id               VARCHAR(64) NOT NULL,
    header_id        VARCHAR(64) REFERENCES node_headers (id),
    inclusion_height INTEGER     NOT NULL,
    coinbase         BOOLEAN     NOT NULL,
    timestamp        BIGINT      NOT NULL,
    size             INTEGER     NOT NULL,
    index            INTEGER     NOT NULL,
    global_index     BIGINT      NOT NULL,
    main_chain       BOOLEAN     NOT NULL,
    PRIMARY KEY (id, header_id)
*/
let TransactionEntity = class TransactionEntity extends transaction_entity_base_1.TransactionEntityBase {
    headerId;
    inclusionHeight;
    coinbase;
    timestamp;
    index;
    globalIndex;
    mainChain;
    inputs;
    dataInputs;
    outputs;
};
__decorate([
    (0, typeorm_1.Column)({ name: "header_id" }),
    __metadata("design:type", String)
], TransactionEntity.prototype, "headerId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "inclusion_height" }),
    __metadata("design:type", Number)
], TransactionEntity.prototype, "inclusionHeight", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "coinbase" }),
    __metadata("design:type", Boolean)
], TransactionEntity.prototype, "coinbase", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "timestamp", type: "bigint" }),
    __metadata("design:type", BigInt)
], TransactionEntity.prototype, "timestamp", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "index" }),
    (0, typeorm_graphql_loader_1.ConfigureLoader)({ required: true }),
    __metadata("design:type", Number)
], TransactionEntity.prototype, "index", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "global_index", type: "bigint" }),
    __metadata("design:type", BigInt)
], TransactionEntity.prototype, "globalIndex", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "main_chain" }),
    __metadata("design:type", Boolean)
], TransactionEntity.prototype, "mainChain", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => input_entity_1.InputEntity, (input) => input.transaction),
    __metadata("design:type", Array)
], TransactionEntity.prototype, "inputs", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => data_input_entity_1.DataInputEntity, (input) => input.transaction),
    __metadata("design:type", Array)
], TransactionEntity.prototype, "dataInputs", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => box_entity_1.BoxEntity, (output) => output.transaction),
    __metadata("design:type", Array)
], TransactionEntity.prototype, "outputs", void 0);
TransactionEntity = __decorate([
    (0, typeorm_1.Entity)({ name: "node_transactions" })
], TransactionEntity);
exports.TransactionEntity = TransactionEntity;
//# sourceMappingURL=transaction-entity.js.map