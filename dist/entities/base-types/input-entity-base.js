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
exports.InputEntityBase = void 0;
const typeorm_graphql_loader_1 = require("@mando75/typeorm-graphql-loader");
const typeorm_1 = require("typeorm");
const box_entity_1 = require("../box-entity");
class InputEntityBase extends typeorm_1.BaseEntity {
    boxId;
    transactionId;
    index;
    proofBytes;
    extension;
    box;
}
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: "box_id" }),
    __metadata("design:type", String)
], InputEntityBase.prototype, "boxId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "tx_id" }),
    __metadata("design:type", String)
], InputEntityBase.prototype, "transactionId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "index" }),
    (0, typeorm_graphql_loader_1.ConfigureLoader)({ required: true }),
    __metadata("design:type", Number)
], InputEntityBase.prototype, "index", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "proof_bytes", nullable: true }),
    __metadata("design:type", String)
], InputEntityBase.prototype, "proofBytes", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "extension", type: "json" }),
    __metadata("design:type", Object)
], InputEntityBase.prototype, "extension", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => box_entity_1.BoxEntity),
    (0, typeorm_1.JoinColumn)({ name: "box_id" }),
    __metadata("design:type", box_entity_1.BoxEntity)
], InputEntityBase.prototype, "box", void 0);
exports.InputEntityBase = InputEntityBase;
//# sourceMappingURL=input-entity-base.js.map