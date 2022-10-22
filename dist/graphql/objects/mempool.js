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
exports.Mempool = void 0;
const type_graphql_1 = require("type-graphql");
const unconfirmed_address_1 = require("./unconfirmed-address");
const unconfirmed_box_1 = require("./unconfirmed-box");
const unconfirmed_transaction_1 = require("./unconfirmed-transaction");
const unconfirmed_input_1 = require("./unconfirmed-input");
let Mempool = class Mempool {
    size;
    transactionsCount;
    transactions;
    boxes;
    addresses;
    inputs;
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], Mempool.prototype, "size", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], Mempool.prototype, "transactionsCount", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [unconfirmed_transaction_1.UnconfirmedTransaction]),
    __metadata("design:type", Array)
], Mempool.prototype, "transactions", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [unconfirmed_box_1.UnconfirmedBox]),
    __metadata("design:type", Array)
], Mempool.prototype, "boxes", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [unconfirmed_address_1.UnconfirmedAddress]),
    __metadata("design:type", Array)
], Mempool.prototype, "addresses", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [unconfirmed_input_1.UnconfirmedInput]),
    __metadata("design:type", Array)
], Mempool.prototype, "inputs", void 0);
Mempool = __decorate([
    (0, type_graphql_1.ObjectType)({ simpleResolvers: true })
], Mempool);
exports.Mempool = Mempool;
//# sourceMappingURL=mempool.js.map