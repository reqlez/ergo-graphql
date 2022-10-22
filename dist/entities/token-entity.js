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
exports.TokenEntity = void 0;
const typeorm_1 = require("typeorm");
const box_entity_1 = require("./box-entity");
/*
  Schema
    TABLE tokens
    token_id        VARCHAR(64)   PRIMARY KEY,
    box_id          VARCHAR(64)   NOT NULL,
    emission_amount BIGINT        NOT NULL,
    name            VARCHAR,
    description     VARCHAR,
    type            VARCHAR,
    decimals        INTEGER
*/
let TokenEntity = class TokenEntity extends typeorm_1.BaseEntity {
    tokenId;
    boxId;
    box;
    emissionAmount;
    name;
    description;
    type;
    decimals;
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: "token_id" }),
    __metadata("design:type", String)
], TokenEntity.prototype, "tokenId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "box_id" }),
    __metadata("design:type", String)
], TokenEntity.prototype, "boxId", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => box_entity_1.BoxEntity),
    (0, typeorm_1.JoinColumn)({ name: "box_id" }),
    __metadata("design:type", box_entity_1.BoxEntity)
], TokenEntity.prototype, "box", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "emission_amount", type: "bigint" }),
    __metadata("design:type", BigInt)
], TokenEntity.prototype, "emissionAmount", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "name" }),
    __metadata("design:type", String)
], TokenEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "description" }),
    __metadata("design:type", String)
], TokenEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "type" }),
    __metadata("design:type", String)
], TokenEntity.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "decimals" }),
    __metadata("design:type", Number)
], TokenEntity.prototype, "decimals", void 0);
TokenEntity = __decorate([
    (0, typeorm_1.Entity)({ name: "tokens" })
], TokenEntity);
exports.TokenEntity = TokenEntity;
//# sourceMappingURL=token-entity.js.map