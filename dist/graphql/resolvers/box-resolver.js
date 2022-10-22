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
exports.BoxResolver = void 0;
const type_graphql_1 = require("type-graphql");
const objects_1 = require("../objects");
const utils_1 = require("../../utils");
const utils_2 = require("./utils");
const pagination_arguments_1 = require("./pagination-arguments");
const class_validator_1 = require("class-validator");
let Registers = class Registers {
    R4;
    R5;
    R6;
    R7;
    R8;
    R9;
};
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], Registers.prototype, "R4", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], Registers.prototype, "R5", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], Registers.prototype, "R6", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], Registers.prototype, "R7", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], Registers.prototype, "R8", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], Registers.prototype, "R9", void 0);
Registers = __decorate([
    (0, type_graphql_1.InputType)()
], Registers);
let BoxesQueryArgs = class BoxesQueryArgs {
    /** @deprecated */
    boxId;
    boxIds;
    registers;
    transactionId;
    headerId;
    spent;
    tokenId;
    /** @deprecated */
    address;
    addresses;
    /** @deprecated */
    ergoTree;
    ergoTrees;
    ergoTreeTemplateHash;
    minHeight;
    maxHeight;
};
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], BoxesQueryArgs.prototype, "boxId", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [String], { nullable: true }),
    (0, class_validator_1.ArrayMaxSize)(20),
    __metadata("design:type", Array)
], BoxesQueryArgs.prototype, "boxIds", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => {
        if (!(0, class_validator_1.isDefined)(o.spent))
            return true;
        const indexFields = [
            o.boxId,
            o.boxIds,
            o.transactionId,
            o.headerId,
            o.address,
            o.addresses,
            o.ergoTree,
            o.ergoTrees,
            o.ergoTreeTemplateHash
        ];
        const definedCount = indexFields.filter((el) => (0, class_validator_1.isDefined)(el)).length;
        return !(definedCount > 0);
    }),
    (0, class_validator_1.IsEmpty)({
        message: "'registers' filter should be used in combination with 'spent' and at least one of 'boxId', 'transactionId', 'headerId', 'address', 'ergoTree' or 'ergoTreeTemplateHash' fields."
    }),
    (0, type_graphql_1.Field)(() => Registers, { nullable: true }),
    __metadata("design:type", Registers)
], BoxesQueryArgs.prototype, "registers", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], BoxesQueryArgs.prototype, "transactionId", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], BoxesQueryArgs.prototype, "headerId", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], BoxesQueryArgs.prototype, "spent", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], BoxesQueryArgs.prototype, "tokenId", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], BoxesQueryArgs.prototype, "address", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [String], { nullable: true }),
    (0, class_validator_1.ArrayMaxSize)(20),
    __metadata("design:type", Array)
], BoxesQueryArgs.prototype, "addresses", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], BoxesQueryArgs.prototype, "ergoTree", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [String], { nullable: true }),
    (0, class_validator_1.ArrayMaxSize)(20),
    __metadata("design:type", Array)
], BoxesQueryArgs.prototype, "ergoTrees", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], BoxesQueryArgs.prototype, "ergoTreeTemplateHash", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], BoxesQueryArgs.prototype, "minHeight", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], BoxesQueryArgs.prototype, "maxHeight", void 0);
BoxesQueryArgs = __decorate([
    (0, type_graphql_1.ArgsType)()
], BoxesQueryArgs);
let BoxResolver = class BoxResolver {
    async boxes({ address, addresses, boxId, boxIds, transactionId, headerId, ergoTree, ergoTrees, ergoTreeTemplateHash, tokenId, spent, registers, minHeight, maxHeight }, { skip, take }, context, info) {
        const boxes = await context.repository.boxes.find({
            resolverInfo: info,
            where: (0, utils_1.removeUndefined)({
                address,
                boxId,
                transactionId,
                headerId,
                ergoTree,
                ergoTreeTemplateHash
            }),
            spent,
            addresses,
            ergoTrees,
            tokenId,
            registers,
            minHeight,
            maxHeight,
            boxIds,
            skip,
            take
        });
        const resultBoxIds = boxes.map((box) => box.boxId);
        const unconfirmedInputBoxIds = (0, utils_2.isFieldSelected)(info, "beingSpent")
            ? await context.repository.unconfirmedInputs.getUnconfirmedInputBoxIds(resultBoxIds)
            : [];
        if (!(0, utils_2.isFieldSelected)(info, "beingSpent")) {
            return boxes;
        }
        return boxes.map((box) => {
            return {
                ...box,
                beingSpent: unconfirmedInputBoxIds.indexOf(box.boxId) > -1
            };
        });
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [objects_1.Box]),
    __param(0, (0, type_graphql_1.Args)({ validate: true })),
    __param(1, (0, type_graphql_1.Args)({ validate: true })),
    __param(2, (0, type_graphql_1.Ctx)()),
    __param(3, (0, type_graphql_1.Info)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [BoxesQueryArgs,
        pagination_arguments_1.PaginationArguments, Object, Object]),
    __metadata("design:returntype", Promise)
], BoxResolver.prototype, "boxes", null);
BoxResolver = __decorate([
    (0, type_graphql_1.Resolver)(objects_1.Box)
], BoxResolver);
exports.BoxResolver = BoxResolver;
//# sourceMappingURL=box-resolver.js.map