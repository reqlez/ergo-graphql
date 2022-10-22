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
exports.AddressBalance = void 0;
const type_graphql_1 = require("type-graphql");
const address_asset_balance_1 = require("./address-asset-balance");
let AddressBalance = class AddressBalance {
    nanoErgs;
    assetsResolver(tokenId) {
        if (!tokenId) {
            return this.assets;
        }
        return this.assets.filter((x) => x.tokenId === tokenId);
    }
    assets;
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", BigInt)
], AddressBalance.prototype, "nanoErgs", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [address_asset_balance_1.AddressAssetBalance], { name: "assets" }),
    __param(0, (0, type_graphql_1.Arg)("tokenId", () => String, { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Array)
], AddressBalance.prototype, "assetsResolver", null);
AddressBalance = __decorate([
    (0, type_graphql_1.ObjectType)({ simpleResolvers: true })
], AddressBalance);
exports.AddressBalance = AddressBalance;
//# sourceMappingURL=address-balance.js.map