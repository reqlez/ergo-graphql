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
exports.AdProofEntity = void 0;
const typeorm_1 = require("typeorm");
const header_entity_1 = require("./header-entity");
/*
  Schema
    header_id   VARCHAR(64) PRIMARY KEY REFERENCES node_headers (id),
    proof_bytes VARCHAR NOT NULL,
    digest      VARCHAR NOT NULL
    PRIMARY KEY (header_id)
*/
let AdProofEntity = class AdProofEntity {
    headerId;
    proofBytes;
    digest;
    header;
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: "header_id" }),
    __metadata("design:type", String)
], AdProofEntity.prototype, "headerId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "proof_bytes" }),
    __metadata("design:type", String)
], AdProofEntity.prototype, "proofBytes", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "digest" }),
    __metadata("design:type", String)
], AdProofEntity.prototype, "digest", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => header_entity_1.HeaderEntity),
    (0, typeorm_1.JoinColumn)({ name: "header_id" }),
    __metadata("design:type", header_entity_1.HeaderEntity)
], AdProofEntity.prototype, "header", void 0);
AdProofEntity = __decorate([
    (0, typeorm_1.Entity)({ name: "node_ad_proofs" })
], AdProofEntity);
exports.AdProofEntity = AdProofEntity;
//# sourceMappingURL=ad-proof-entity.js.map