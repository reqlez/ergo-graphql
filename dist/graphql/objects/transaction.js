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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
const lodash_1 = require("lodash");
const type_graphql_1 = require("type-graphql");
const transaction_interface_1 = require("../interfaces/transaction-interface");
const box_1 = require("./box");
const data_input_1 = require("./data-input");
const input_1 = require("./input");
let Transaction = class Transaction extends transaction_interface_1.ITransaction {
    headerId;
    inclusionHeight;
    coinbase;
    timestamp;
    index;
    globalIndex;
    mainChain;
    inputs;
    inputsResolver() {
        return (0, lodash_1.orderBy)(this.inputs, (input) => input.index);
    }
    dataInputs;
    dataInputsResolver() {
        return (0, lodash_1.orderBy)(this.dataInputs, (dataInput) => dataInput.index);
    }
    outputs;
    outputsResolver(relevantOnly) {
        return (0, lodash_1.orderBy)(this.outputs, (output) => output.index);
    }
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Transaction.prototype, "headerId", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], Transaction.prototype, "inclusionHeight", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Boolean)
], Transaction.prototype, "coinbase", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", BigInt)
], Transaction.prototype, "timestamp", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], Transaction.prototype, "index", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", BigInt)
], Transaction.prototype, "globalIndex", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Boolean)
], Transaction.prototype, "mainChain", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [input_1.Input], { name: "inputs" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Transaction.prototype, "inputsResolver", null);
__decorate([
    (0, type_graphql_1.Field)(() => [data_input_1.DataInput], { name: "dataInputs" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Transaction.prototype, "dataInputsResolver", null);
__decorate([
    (0, type_graphql_1.Field)(() => [box_1.Box], { name: "outputs" }),
    __param(0, (0, type_graphql_1.Arg)("relevantOnly", () => Boolean, {
        nullable: true,
        description: "Only includes outputs owned by `address` and the miner fee output"
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Array)
], Transaction.prototype, "outputsResolver", null);
Transaction = __decorate([
    (0, type_graphql_1.ObjectType)({ implements: transaction_interface_1.ITransaction, simpleResolvers: true })
], Transaction);
exports.Transaction = Transaction;
//# sourceMappingURL=transaction.js.map