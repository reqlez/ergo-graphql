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
exports.ScriptConstantEntity = void 0;
const typeorm_1 = require("typeorm");
/*
  Schema
    index            INTEGER       NOT NULL,
    box_id           VARCHAR(64)   NOT NULL,
    value_type       VARCHAR(128)  NOT NULL,
    serialized_value VARCHAR(8192) NOT NULL,
    rendered_value   VARCHAR(8192) NOT NULL,
    PRIMARY KEY (index, box_id)
*/
let ScriptConstantEntity = class ScriptConstantEntity {
    index;
    boxId;
    valueType;
    serializedValue;
    renderedValue;
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: "index" }),
    __metadata("design:type", Number)
], ScriptConstantEntity.prototype, "index", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "box_id" }),
    __metadata("design:type", String)
], ScriptConstantEntity.prototype, "boxId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "value_type" }),
    __metadata("design:type", String)
], ScriptConstantEntity.prototype, "valueType", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "serialized_value" }),
    __metadata("design:type", String)
], ScriptConstantEntity.prototype, "serializedValue", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "rendered_value" }),
    __metadata("design:type", String)
], ScriptConstantEntity.prototype, "renderedValue", void 0);
ScriptConstantEntity = __decorate([
    (0, typeorm_1.Entity)({ name: "script_constants" })
], ScriptConstantEntity);
exports.ScriptConstantEntity = ScriptConstantEntity;
//# sourceMappingURL=script-constant-entity.js.map