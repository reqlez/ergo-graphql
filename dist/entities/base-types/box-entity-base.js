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
exports.BoxEntityBase = void 0;
const typeorm_graphql_loader_1 = require("@mando75/typeorm-graphql-loader");
const typeorm_1 = require("typeorm");
var NonMandatoryRegisterKey;
(function (NonMandatoryRegisterKey) {
    NonMandatoryRegisterKey["R4"] = "R4";
    NonMandatoryRegisterKey["R5"] = "R5";
    NonMandatoryRegisterKey["R6"] = "R6";
    NonMandatoryRegisterKey["R7"] = "R7";
    NonMandatoryRegisterKey["R8"] = "R8";
    NonMandatoryRegisterKey["R9"] = "R9";
})(NonMandatoryRegisterKey || (NonMandatoryRegisterKey = {}));
class BoxEntityBase extends typeorm_1.BaseEntity {
    boxId;
    transactionId;
    value;
    creationHeight;
    index;
    ergoTree;
    ergoTreeTemplateHash;
    address;
    additionalRegisters;
}
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: "box_id" }),
    __metadata("design:type", String)
], BoxEntityBase.prototype, "boxId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "tx_id" }),
    __metadata("design:type", String)
], BoxEntityBase.prototype, "transactionId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "value", type: "bigint" }),
    __metadata("design:type", BigInt)
], BoxEntityBase.prototype, "value", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "creation_height" }),
    __metadata("design:type", Number)
], BoxEntityBase.prototype, "creationHeight", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "index" }),
    (0, typeorm_graphql_loader_1.ConfigureLoader)({ required: true }),
    __metadata("design:type", Number)
], BoxEntityBase.prototype, "index", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "ergo_tree" }),
    __metadata("design:type", String)
], BoxEntityBase.prototype, "ergoTree", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "ergo_tree_template_hash" }),
    __metadata("design:type", String)
], BoxEntityBase.prototype, "ergoTreeTemplateHash", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "address" }),
    __metadata("design:type", String)
], BoxEntityBase.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "additional_registers", type: "json" }),
    __metadata("design:type", Object)
], BoxEntityBase.prototype, "additionalRegisters", void 0);
exports.BoxEntityBase = BoxEntityBase;
//# sourceMappingURL=box-entity-base.js.map