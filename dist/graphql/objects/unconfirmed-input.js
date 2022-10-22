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
exports.UnconfirmedInput = void 0;
const type_graphql_1 = require("type-graphql");
const input_interface_1 = require("../interfaces/input-interface");
const unconfirmed_transaction_1 = require("./unconfirmed-transaction");
let UnconfirmedInput = class UnconfirmedInput extends input_interface_1.IInput {
    transaction;
};
__decorate([
    (0, type_graphql_1.Field)(() => unconfirmed_transaction_1.UnconfirmedTransaction),
    __metadata("design:type", unconfirmed_transaction_1.UnconfirmedTransaction)
], UnconfirmedInput.prototype, "transaction", void 0);
UnconfirmedInput = __decorate([
    (0, type_graphql_1.ObjectType)({ implements: input_interface_1.IInput, simpleResolvers: true })
], UnconfirmedInput);
exports.UnconfirmedInput = UnconfirmedInput;
//# sourceMappingURL=unconfirmed-input.js.map