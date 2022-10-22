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
exports.Header = void 0;
const type_graphql_1 = require("type-graphql");
const ad_proof_1 = require("./ad-proof");
const extension_1 = require("./extension");
const block_1 = require("./block");
const graphql_type_json_1 = require("graphql-type-json");
let Header = class Header {
    headerId;
    parentId;
    version;
    height;
    nBits;
    difficulty;
    timestamp;
    stateRoot;
    adProofsRoot;
    transactionsRoot;
    extensionHash;
    powSolutions() {
        return { pk: this.minerPk, w: this.w, n: this.n, d: this.d };
    }
    votesResolver() {
        return [
            Number.parseInt(this.votes.substring(0, 2), 16),
            Number.parseInt(this.votes.substring(2, 4), 16),
            Number.parseInt(this.votes.substring(4, 6), 16)
        ];
    }
    mainChain;
    extension;
    adProof;
    blockInfo;
    minerPk;
    w;
    n;
    d;
    votes;
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Header.prototype, "headerId", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Header.prototype, "parentId", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], Header.prototype, "version", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], Header.prototype, "height", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", BigInt)
], Header.prototype, "nBits", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", BigInt)
], Header.prototype, "difficulty", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", BigInt)
], Header.prototype, "timestamp", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Header.prototype, "stateRoot", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Header.prototype, "adProofsRoot", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Header.prototype, "transactionsRoot", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Header.prototype, "extensionHash", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => graphql_type_json_1.GraphQLJSONObject),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Header.prototype, "powSolutions", null);
__decorate([
    (0, type_graphql_1.Field)(() => [Number], { name: "votes" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Header.prototype, "votesResolver", null);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Boolean)
], Header.prototype, "mainChain", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => extension_1.Extension),
    __metadata("design:type", Array)
], Header.prototype, "extension", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => ad_proof_1.AdProof),
    __metadata("design:type", Array)
], Header.prototype, "adProof", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => block_1.Block),
    __metadata("design:type", Array)
], Header.prototype, "blockInfo", void 0);
Header = __decorate([
    (0, type_graphql_1.ObjectType)({ simpleResolvers: true })
], Header);
exports.Header = Header;
//# sourceMappingURL=header.js.map