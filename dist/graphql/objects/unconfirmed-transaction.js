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
exports.UnconfirmedTransaction = void 0;
const type_graphql_1 = require("type-graphql");
const transaction_interface_1 = require("../interfaces/transaction-interface");
const unconfirmed_box_1 = require("./unconfirmed-box");
const unconfirmed_input_1 = require("./unconfirmed-input");
const unconfirmed_data_input_1 = require("./unconfirmed-data-input");
const lodash_1 = require("lodash");
let UnconfirmedTransaction = class UnconfirmedTransaction extends transaction_interface_1.ITransaction {
    timestamp;
    inputs;
    inputsResolver() {
        return (0, lodash_1.orderBy)(this.inputs, (input) => input.index);
    }
    dataInputs;
    dataInputsResolver() {
        return (0, lodash_1.orderBy)(this.dataInputs, (dataInput) => dataInput.index);
    }
    outputs;
    outputsResolver() {
        return (0, lodash_1.orderBy)(this.outputs, (output) => output.index);
    }
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", BigInt)
], UnconfirmedTransaction.prototype, "timestamp", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [unconfirmed_input_1.UnconfirmedInput], { name: "inputs" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UnconfirmedTransaction.prototype, "inputsResolver", null);
__decorate([
    (0, type_graphql_1.Field)(() => [unconfirmed_data_input_1.UnconfirmedDataInput], { name: "dataInputs" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UnconfirmedTransaction.prototype, "dataInputsResolver", null);
__decorate([
    (0, type_graphql_1.Field)(() => [unconfirmed_box_1.UnconfirmedBox], { name: "outputs" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UnconfirmedTransaction.prototype, "outputsResolver", null);
UnconfirmedTransaction = __decorate([
    (0, type_graphql_1.ObjectType)({ implements: transaction_interface_1.ITransaction, simpleResolvers: true })
], UnconfirmedTransaction);
exports.UnconfirmedTransaction = UnconfirmedTransaction;
//# sourceMappingURL=unconfirmed-transaction.js.map