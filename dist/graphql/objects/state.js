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
exports.State = void 0;
const type_graphql_1 = require("type-graphql");
const _1 = require(".");
let State = class State {
    blockId;
    height;
    boxGlobalIndex;
    transactionGlobalIndex;
    params;
    network;
    difficulty;
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], State.prototype, "blockId", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], State.prototype, "height", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", BigInt)
], State.prototype, "boxGlobalIndex", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", BigInt)
], State.prototype, "transactionGlobalIndex", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => _1.Epochs),
    __metadata("design:type", _1.Epochs)
], State.prototype, "params", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], State.prototype, "network", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", BigInt)
], State.prototype, "difficulty", void 0);
State = __decorate([
    (0, type_graphql_1.ObjectType)({ simpleResolvers: true })
], State);
exports.State = State;
//# sourceMappingURL=state.js.map