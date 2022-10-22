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
exports.HeaderEntity = void 0;
const typeorm_1 = require("typeorm");
const extension_entity_1 = require("./extension-entity");
const ad_proof_entity_1 = require("./ad-proof-entity");
const block_info_entity_1 = require("./block-info-entity");
const typeorm_graphql_loader_1 = require("@mando75/typeorm-graphql-loader");
/*
  Schema
    TABLE node_headers
    id                VARCHAR(64) PRIMARY KEY,
    parent_id         VARCHAR(64) NOT NULL,
    version           SMALLINT    NOT NULL,
    height            INTEGER     NOT NULL,
    n_bits            BIGINT      NOT NULL,
    difficulty        NUMERIC     NOT NULL,
    timestamp         BIGINT      NOT NULL,
    state_root        VARCHAR(66) NOT NULL,
    ad_proofs_root    VARCHAR(64) NOT NULL,
    transactions_root VARCHAR(64) NOT NULL,
    extension_hash    VARCHAR(64) NOT NULL,
    miner_pk          VARCHAR     NOT NULL,
    w                 VARCHAR     NOT NULL,
    n                 VARCHAR     NOT NULL,
    d                 VARCHAR     NOT NULL,
    votes             VARCHAR     NOT NULL,
    main_chain        BOOLEAN     NOT NULL
    PRIMARY KEY (id)
*/
let HeaderEntity = class HeaderEntity extends typeorm_1.BaseEntity {
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
    minerPk;
    w;
    n;
    d;
    votes;
    mainChain;
    extension;
    adProof;
    blockInfo;
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: "id" }),
    __metadata("design:type", String)
], HeaderEntity.prototype, "headerId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "parent_id" }),
    __metadata("design:type", String)
], HeaderEntity.prototype, "parentId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "version" }),
    __metadata("design:type", Number)
], HeaderEntity.prototype, "version", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "height" }),
    __metadata("design:type", Number)
], HeaderEntity.prototype, "height", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "n_bits", type: "bigint" }),
    __metadata("design:type", BigInt)
], HeaderEntity.prototype, "nBits", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "difficulty" }),
    __metadata("design:type", Number)
], HeaderEntity.prototype, "difficulty", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "timestamp", type: "bigint" }),
    __metadata("design:type", BigInt)
], HeaderEntity.prototype, "timestamp", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "state_root" }),
    __metadata("design:type", String)
], HeaderEntity.prototype, "stateRoot", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "ad_proofs_root" }),
    __metadata("design:type", String)
], HeaderEntity.prototype, "adProofsRoot", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "transactions_root" }),
    __metadata("design:type", String)
], HeaderEntity.prototype, "transactionsRoot", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "extension_hash" }),
    __metadata("design:type", String)
], HeaderEntity.prototype, "extensionHash", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "miner_pk" }),
    (0, typeorm_graphql_loader_1.ConfigureLoader)({ graphQLName: "powSolutions" }),
    __metadata("design:type", String)
], HeaderEntity.prototype, "minerPk", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "w" }),
    (0, typeorm_graphql_loader_1.ConfigureLoader)({ graphQLName: "powSolutions" }),
    __metadata("design:type", String)
], HeaderEntity.prototype, "w", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "n" }),
    (0, typeorm_graphql_loader_1.ConfigureLoader)({ graphQLName: "powSolutions" }),
    __metadata("design:type", String)
], HeaderEntity.prototype, "n", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "d" }),
    (0, typeorm_graphql_loader_1.ConfigureLoader)({ graphQLName: "powSolutions" }),
    __metadata("design:type", String)
], HeaderEntity.prototype, "d", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "votes" }),
    __metadata("design:type", String)
], HeaderEntity.prototype, "votes", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "main_chain" }),
    __metadata("design:type", Boolean)
], HeaderEntity.prototype, "mainChain", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => extension_entity_1.ExtensionEntity),
    (0, typeorm_1.JoinColumn)({ name: "id" }),
    __metadata("design:type", extension_entity_1.ExtensionEntity)
], HeaderEntity.prototype, "extension", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => ad_proof_entity_1.AdProofEntity),
    (0, typeorm_1.JoinColumn)({ name: "id" }),
    __metadata("design:type", Array)
], HeaderEntity.prototype, "adProof", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => block_info_entity_1.BlockInfoEntity),
    (0, typeorm_1.JoinColumn)({ name: "id" }),
    __metadata("design:type", Array)
], HeaderEntity.prototype, "blockInfo", void 0);
HeaderEntity = __decorate([
    (0, typeorm_1.Entity)({ name: "node_headers" })
], HeaderEntity);
exports.HeaderEntity = HeaderEntity;
//# sourceMappingURL=header-entity.js.map