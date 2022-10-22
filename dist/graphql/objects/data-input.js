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
exports.DataInput = void 0;
const type_graphql_1 = require("type-graphql");
const box_1 = require("./box");
const transaction_1 = require("./transaction");
const data_input_interface_1 = require("../interfaces/data-input-interface");
let DataInput = class DataInput extends data_input_interface_1.IDataInput {
    box;
    transaction;
    headerId;
    mainChain;
};
__decorate([
    (0, type_graphql_1.Field)(() => box_1.Box),
    __metadata("design:type", box_1.Box)
], DataInput.prototype, "box", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => transaction_1.Transaction),
    __metadata("design:type", transaction_1.Transaction)
], DataInput.prototype, "transaction", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], DataInput.prototype, "headerId", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Boolean)
], DataInput.prototype, "mainChain", void 0);
DataInput = __decorate([
    (0, type_graphql_1.ObjectType)({ implements: data_input_interface_1.IDataInput, simpleResolvers: true })
], DataInput);
exports.DataInput = DataInput;
//# sourceMappingURL=data-input.js.map