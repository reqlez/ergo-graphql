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
exports.PaginationArguments = void 0;
const class_validator_1 = require("class-validator");
const type_graphql_1 = require("type-graphql");
const consts_1 = require("../../consts");
let PaginationArguments = class PaginationArguments {
    skip = consts_1.MIN_SKIP;
    take = consts_1.MAX_TAKE;
};
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Int, { defaultValue: consts_1.MIN_SKIP }),
    (0, class_validator_1.Min)(consts_1.MIN_SKIP),
    (0, class_validator_1.IsDefined)(),
    __metadata("design:type", Object)
], PaginationArguments.prototype, "skip", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Int, { defaultValue: consts_1.MAX_TAKE }),
    (0, class_validator_1.Min)(consts_1.MIN_TAKE),
    (0, class_validator_1.Max)(consts_1.MAX_TAKE),
    (0, class_validator_1.IsDefined)(),
    __metadata("design:type", Object)
], PaginationArguments.prototype, "take", void 0);
PaginationArguments = __decorate([
    (0, type_graphql_1.ArgsType)()
], PaginationArguments);
exports.PaginationArguments = PaginationArguments;
//# sourceMappingURL=pagination-arguments.js.map