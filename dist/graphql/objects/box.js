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
exports.Box = void 0;
const type_graphql_1 = require("type-graphql");
const asset_1 = require("./asset");
const input_1 = require("./input");
const transaction_1 = require("./transaction");
const box_interface_1 = require("../interfaces/box-interface");
const lodash_1 = require("lodash");
let Box = class Box extends box_interface_1.IBox {
    transaction;
    headerId;
    settlementHeight;
    globalIndex;
    mainChain;
    spentBy;
    assets;
    assetsResolver() {
        return (0, lodash_1.orderBy)(this.assets, (asset) => asset.index);
    }
    beingSpent;
};
__decorate([
    (0, type_graphql_1.Field)(() => transaction_1.Transaction),
    __metadata("design:type", transaction_1.Transaction)
], Box.prototype, "transaction", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Box.prototype, "headerId", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], Box.prototype, "settlementHeight", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", BigInt)
], Box.prototype, "globalIndex", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Boolean)
], Box.prototype, "mainChain", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => input_1.Input, { nullable: true }),
    __metadata("design:type", input_1.Input)
], Box.prototype, "spentBy", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [asset_1.Asset], { name: "assets" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Box.prototype, "assetsResolver", null);
__decorate([
    (0, type_graphql_1.Field)(() => Boolean),
    __metadata("design:type", Boolean)
], Box.prototype, "beingSpent", void 0);
Box = __decorate([
    (0, type_graphql_1.ObjectType)({ implements: box_interface_1.IBox, simpleResolvers: true })
], Box);
exports.Box = Box;
//# sourceMappingURL=box.js.map