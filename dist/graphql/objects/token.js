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
exports.Token = void 0;
const type_graphql_1 = require("type-graphql");
const box_1 = require("./box");
let Token = class Token {
    tokenId;
    boxId;
    box;
    emissionAmount;
    name;
    description;
    type;
    decimals;
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Token.prototype, "tokenId", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Token.prototype, "boxId", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => box_1.Box),
    __metadata("design:type", box_1.Box)
], Token.prototype, "box", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", BigInt)
], Token.prototype, "emissionAmount", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Token.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Token.prototype, "description", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Token.prototype, "type", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], Token.prototype, "decimals", void 0);
Token = __decorate([
    (0, type_graphql_1.ObjectType)({ simpleResolvers: true })
], Token);
exports.Token = Token;
//# sourceMappingURL=token.js.map