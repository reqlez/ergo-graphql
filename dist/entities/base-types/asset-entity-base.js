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
exports.AssetEntityBase = void 0;
const typeorm_graphql_loader_1 = require("@mando75/typeorm-graphql-loader");
const typeorm_1 = require("typeorm");
const token_entity_1 = require("../token-entity");
class AssetEntityBase extends typeorm_1.BaseEntity {
    tokenId;
    boxId;
    index;
    amount;
    token;
}
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: "token_id", unique: false }),
    __metadata("design:type", String)
], AssetEntityBase.prototype, "tokenId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "box_id", primary: true }),
    __metadata("design:type", String)
], AssetEntityBase.prototype, "boxId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "index", primary: true }),
    (0, typeorm_graphql_loader_1.ConfigureLoader)({ required: true }),
    __metadata("design:type", Number)
], AssetEntityBase.prototype, "index", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "value", type: "bigint" }),
    __metadata("design:type", BigInt)
], AssetEntityBase.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => token_entity_1.TokenEntity),
    (0, typeorm_1.JoinColumn)({ name: "token_id" }),
    __metadata("design:type", token_entity_1.TokenEntity)
], AssetEntityBase.prototype, "token", void 0);
exports.AssetEntityBase = AssetEntityBase;
//# sourceMappingURL=asset-entity-base.js.map