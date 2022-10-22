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
exports.UnconfirmedBox = void 0;
const type_graphql_1 = require("type-graphql");
const box_interface_1 = require("../interfaces/box-interface");
const unconfirmed_transaction_1 = require("./unconfirmed-transaction");
const unconfirmed_asset_1 = require("./unconfirmed-asset");
const lodash_1 = require("lodash");
let UnconfirmedBox = class UnconfirmedBox extends box_interface_1.IBox {
    transaction;
    assets;
    assetsResolver() {
        return (0, lodash_1.orderBy)(this.assets, (asset) => asset.index);
    }
};
__decorate([
    (0, type_graphql_1.Field)(() => unconfirmed_transaction_1.UnconfirmedTransaction),
    __metadata("design:type", unconfirmed_transaction_1.UnconfirmedTransaction)
], UnconfirmedBox.prototype, "transaction", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [unconfirmed_asset_1.UnconfirmedAsset], { name: "assets" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UnconfirmedBox.prototype, "assetsResolver", null);
UnconfirmedBox = __decorate([
    (0, type_graphql_1.ObjectType)({ implements: box_interface_1.IBox, simpleResolvers: true })
], UnconfirmedBox);
exports.UnconfirmedBox = UnconfirmedBox;
//# sourceMappingURL=unconfirmed-box.js.map