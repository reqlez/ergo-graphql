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
exports.AddressResolver = void 0;
const address_1 = require("../objects/address");
const utils_1 = require("./utils");
const type_graphql_1 = require("type-graphql");
const class_validator_1 = require("class-validator");
let AddressesQueryArgs = class AddressesQueryArgs {
    addresses;
};
__decorate([
    (0, type_graphql_1.Field)(() => [String], { nullable: false }),
    (0, class_validator_1.ArrayMaxSize)(20),
    __metadata("design:type", Array)
], AddressesQueryArgs.prototype, "addresses", void 0);
AddressesQueryArgs = __decorate([
    (0, type_graphql_1.ArgsType)()
], AddressesQueryArgs);
let AddressResolver = class AddressResolver {
    async addresses({ addresses }, context, info) {
        const balances = (0, utils_1.isFieldSelected)(info, "balance")
            ? await context.repository.boxes.sum({
                where: { addresses },
                include: {
                    nanoErgs: (0, utils_1.isFieldSelected)(info, "balance.nanoErgs"),
                    assets: (0, utils_1.isFieldSelected)(info, "balance.assets")
                }
            })
            : [];
        const usedSelected = (0, utils_1.isFieldSelected)(info, "used");
        const boxesCountSelected = (0, utils_1.isFieldSelected)(info, "boxesCount");
        const boxesCount = usedSelected || boxesCountSelected
            ? await context.repository.boxes.getAddressesBoxCount({
                where: { addresses }
            })
            : [];
        return addresses.map((address) => {
            return {
                address,
                balance: balances.find((b) => b.address === address) || { nanoErgs: 0, assets: [] },
                used: boxesCount.find((b) => b.address === address) ? true : false,
                boxesCount: boxesCount.find((b) => b.address === address)?.boxesCount || 0
            };
        });
    }
    async transactionsCount(root, context) {
        return await context.repository.transactions.count({
            where: {
                address: root.address,
                maxHeight: context.args.height
            }
        });
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [address_1.Address]),
    __param(0, (0, type_graphql_1.Args)({ validate: true })),
    __param(1, (0, type_graphql_1.Ctx)()),
    __param(2, (0, type_graphql_1.Info)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AddressesQueryArgs, Object, Object]),
    __metadata("design:returntype", Promise)
], AddressResolver.prototype, "addresses", null);
__decorate([
    (0, type_graphql_1.FieldResolver)(),
    __param(0, (0, type_graphql_1.Root)()),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [address_1.Address, Object]),
    __metadata("design:returntype", Promise)
], AddressResolver.prototype, "transactionsCount", null);
AddressResolver = __decorate([
    (0, type_graphql_1.Resolver)(address_1.Address)
], AddressResolver);
exports.AddressResolver = AddressResolver;
//# sourceMappingURL=address-resolver.js.map