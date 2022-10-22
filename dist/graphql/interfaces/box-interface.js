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
exports.IBox = void 0;
const type_graphql_1 = require("type-graphql");
const graphql_type_json_1 = require("graphql-type-json");
const typeorm_graphql_loader_1 = require("@mando75/typeorm-graphql-loader");
let IBox = class IBox {
    boxId;
    transactionId;
    value;
    creationHeight;
    index;
    ergoTree;
    ergoTreeTemplateHash;
    address;
    additionalRegistersResolver() {
        const keys = Object.keys(this.additionalRegisters);
        if (keys.length < 1) {
            return {};
        }
        const orderedRegisters = {};
        for (const key of keys.sort()) {
            orderedRegisters[key] =
                this.additionalRegisters[key]?.serializedValue;
        }
        return orderedRegisters;
    }
    additionalRegisters;
};
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_graphql_loader_1.ConfigureLoader)({ required: true }),
    __metadata("design:type", String)
], IBox.prototype, "boxId", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], IBox.prototype, "transactionId", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", BigInt)
], IBox.prototype, "value", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], IBox.prototype, "creationHeight", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], IBox.prototype, "index", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], IBox.prototype, "ergoTree", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], IBox.prototype, "ergoTreeTemplateHash", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], IBox.prototype, "address", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => graphql_type_json_1.GraphQLJSONObject, { name: "additionalRegisters" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], IBox.prototype, "additionalRegistersResolver", null);
IBox = __decorate([
    (0, type_graphql_1.InterfaceType)()
], IBox);
exports.IBox = IBox;
//# sourceMappingURL=box-interface.js.map