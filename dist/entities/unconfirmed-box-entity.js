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
exports.UnconfirmedBoxEntity = void 0;
const typeorm_1 = require("typeorm");
const box_entity_base_1 = require("./base-types/box-entity-base");
const unconfirmed_transaction_entity_1 = require("./unconfirmed-transaction-entity");
const unconfirmed_asset_entity_1 = require("./unconfirmed-asset-entity");
/*
  Schema
    box_id                  VARCHAR(64) PRIMARY KEY,
    tx_id                   VARCHAR(64) NOT NULL REFERENCES node_u_transactions (id) ON DELETE CASCADE,
    value                   BIGINT      NOT NULL,
    creation_height         INTEGER     NOT NULL,
    index                   INTEGER     NOT NULL,
    ergo_tree               VARCHAR     NOT NULL,
    ergo_tree_template_hash VARCHAR(64) NOT NULL,
    address                 VARCHAR,
    additional_registers    JSON        NOT NULL
*/
let UnconfirmedBoxEntity = class UnconfirmedBoxEntity extends box_entity_base_1.BoxEntityBase {
    transaction;
    assets;
};
__decorate([
    (0, typeorm_1.ManyToOne)(() => unconfirmed_transaction_entity_1.UnconfirmedTransactionEntity, (tx) => tx.outputs, { onDelete: "CASCADE" }),
    (0, typeorm_1.JoinColumn)({ name: "tx_id" }),
    __metadata("design:type", unconfirmed_transaction_entity_1.UnconfirmedTransactionEntity)
], UnconfirmedBoxEntity.prototype, "transaction", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => unconfirmed_asset_entity_1.UnconfirmedAssetEntity, (asset) => asset.box),
    __metadata("design:type", Array)
], UnconfirmedBoxEntity.prototype, "assets", void 0);
UnconfirmedBoxEntity = __decorate([
    (0, typeorm_1.Entity)({ name: "node_u_outputs" })
], UnconfirmedBoxEntity);
exports.UnconfirmedBoxEntity = UnconfirmedBoxEntity;
//# sourceMappingURL=unconfirmed-box-entity.js.map