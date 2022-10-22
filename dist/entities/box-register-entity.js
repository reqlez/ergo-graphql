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
exports.BoxRegisterEntity = void 0;
const typeorm_1 = require("typeorm");
const box_entity_1 = require("./box-entity");
/*
  Schema
    box_registers
    id               VARCHAR(2)    NOT NULL,
    box_id           VARCHAR(64)   NOT NULL,
    value_type       VARCHAR(128)  NOT NULL,
    serialized_value VARCHAR       NOT NULL,
    rendered_value   VARCHAR       NOT NULL,
    PRIMARY KEY (id, box_id)
*/
let BoxRegisterEntity = class BoxRegisterEntity {
    registerId;
    boxId;
    valueType;
    serializedValue;
    rendered_value;
    box;
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: "id" }),
    __metadata("design:type", String)
], BoxRegisterEntity.prototype, "registerId", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: "box_id" }),
    __metadata("design:type", String)
], BoxRegisterEntity.prototype, "boxId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "value_type" }),
    __metadata("design:type", String)
], BoxRegisterEntity.prototype, "valueType", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "serialized_value" }),
    __metadata("design:type", String)
], BoxRegisterEntity.prototype, "serializedValue", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "rendered_value" }),
    __metadata("design:type", String)
], BoxRegisterEntity.prototype, "rendered_value", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => box_entity_1.BoxEntity, (box) => box.assets),
    (0, typeorm_1.JoinColumn)({ name: "box_id" }),
    __metadata("design:type", box_entity_1.BoxEntity)
], BoxRegisterEntity.prototype, "box", void 0);
BoxRegisterEntity = __decorate([
    (0, typeorm_1.Entity)({ name: "box_registers" })
], BoxRegisterEntity);
exports.BoxRegisterEntity = BoxRegisterEntity;
//# sourceMappingURL=box-register-entity.js.map