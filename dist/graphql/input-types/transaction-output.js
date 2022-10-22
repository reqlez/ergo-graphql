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
exports.TransactionOutput = exports.AssetInput = void 0;
const type_graphql_1 = require("type-graphql");
const graphql_type_json_1 = require("graphql-type-json");
let AssetInput = class AssetInput {
    tokenId;
    amount;
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], AssetInput.prototype, "tokenId", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], AssetInput.prototype, "amount", void 0);
AssetInput = __decorate([
    (0, type_graphql_1.InputType)()
], AssetInput);
exports.AssetInput = AssetInput;
let TransactionOutput = class TransactionOutput {
    boxId;
    value;
    ergoTree;
    creationHeight;
    assets;
    additionalRegisters;
    transactionId;
    index;
};
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], TransactionOutput.prototype, "boxId", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], TransactionOutput.prototype, "value", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], TransactionOutput.prototype, "ergoTree", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], TransactionOutput.prototype, "creationHeight", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [AssetInput], { nullable: true }),
    __metadata("design:type", Array)
], TransactionOutput.prototype, "assets", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => graphql_type_json_1.GraphQLJSONObject),
    __metadata("design:type", Object)
], TransactionOutput.prototype, "additionalRegisters", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], TransactionOutput.prototype, "transactionId", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], TransactionOutput.prototype, "index", void 0);
TransactionOutput = __decorate([
    (0, type_graphql_1.InputType)("TransactionOutput")
], TransactionOutput);
exports.TransactionOutput = TransactionOutput;
//# sourceMappingURL=transaction-output.js.map