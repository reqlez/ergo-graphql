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
exports.DataInputEntityBase = void 0;
const typeorm_graphql_loader_1 = require("@mando75/typeorm-graphql-loader");
const typeorm_1 = require("typeorm");
class DataInputEntityBase extends typeorm_1.BaseEntity {
    boxId;
    transactionId;
    index;
}
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: "box_id" }),
    __metadata("design:type", String)
], DataInputEntityBase.prototype, "boxId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "tx_id" }),
    __metadata("design:type", String)
], DataInputEntityBase.prototype, "transactionId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "index" }),
    (0, typeorm_graphql_loader_1.ConfigureLoader)({ required: true }),
    __metadata("design:type", Number)
], DataInputEntityBase.prototype, "index", void 0);
exports.DataInputEntityBase = DataInputEntityBase;
//# sourceMappingURL=data-input-entity-base.js.map