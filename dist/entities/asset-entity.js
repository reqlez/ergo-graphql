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
exports.AssetEntity = void 0;
const typeorm_1 = require("typeorm");
const box_entity_1 = require("./box-entity");
const asset_entity_base_1 = require("./base-types/asset-entity-base");
/*
  Schema
    TABLE node_assets
    token_id  VARCHAR(64) NOT NULL,
    box_id    VARCHAR(64) NOT NULL,
    header_id VARCHAR(64) NOT NULL,
    index     INTEGER     NOT NULL,
    value     BIGINT      NOT NULL,
    PRIMARY KEY (index, token_id, box_id, header_id)
*/
let AssetEntity = class AssetEntity extends asset_entity_base_1.AssetEntityBase {
    headerId;
    box;
};
__decorate([
    (0, typeorm_1.Column)({ name: "header_id" }),
    __metadata("design:type", String)
], AssetEntity.prototype, "headerId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => box_entity_1.BoxEntity, (box) => box.assets),
    (0, typeorm_1.JoinColumn)({ name: "box_id" }),
    __metadata("design:type", box_entity_1.BoxEntity)
], AssetEntity.prototype, "box", void 0);
AssetEntity = __decorate([
    (0, typeorm_1.Entity)({ name: "node_assets" })
], AssetEntity);
exports.AssetEntity = AssetEntity;
//# sourceMappingURL=asset-entity.js.map