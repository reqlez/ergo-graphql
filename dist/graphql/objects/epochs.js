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
exports.Epochs = void 0;
const type_graphql_1 = require("type-graphql");
let Epochs = class Epochs {
    height;
    storageFeeFactor;
    minValuePerByte;
    maxBlockSize;
    maxBlockCost;
    blockVersion;
    tokenAccessCost;
    inputCost;
    dataInputCost;
    outputCost;
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], Epochs.prototype, "height", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], Epochs.prototype, "storageFeeFactor", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], Epochs.prototype, "minValuePerByte", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], Epochs.prototype, "maxBlockSize", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], Epochs.prototype, "maxBlockCost", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], Epochs.prototype, "blockVersion", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], Epochs.prototype, "tokenAccessCost", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], Epochs.prototype, "inputCost", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], Epochs.prototype, "dataInputCost", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], Epochs.prototype, "outputCost", void 0);
Epochs = __decorate([
    (0, type_graphql_1.ObjectType)({ simpleResolvers: true })
], Epochs);
exports.Epochs = Epochs;
//# sourceMappingURL=epochs.js.map