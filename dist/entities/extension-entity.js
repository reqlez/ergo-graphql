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
exports.ExtensionEntity = void 0;
const typeorm_1 = require("typeorm");
/*
  Schema
    header_id VARCHAR(64) PRIMARY KEY REFERENCES node_headers (id),
    digest    VARCHAR(64) NOT NULL,
    fields    JSON        NOT NULL,
    PRIMARY KEY (header_id)
*/
let ExtensionEntity = class ExtensionEntity {
    headerId;
    digest;
    fields;
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: "header_id" }),
    __metadata("design:type", String)
], ExtensionEntity.prototype, "headerId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "digest" }),
    __metadata("design:type", String)
], ExtensionEntity.prototype, "digest", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "fields", type: "json" }),
    __metadata("design:type", Object)
], ExtensionEntity.prototype, "fields", void 0);
ExtensionEntity = __decorate([
    (0, typeorm_1.Entity)({ name: "node_extensions" })
], ExtensionEntity);
exports.ExtensionEntity = ExtensionEntity;
//# sourceMappingURL=extension-entity.js.map