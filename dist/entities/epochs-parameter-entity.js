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
exports.EpochsParameterEntity = void 0;
const typeorm_1 = require("typeorm");
/*
  Schema
    id                 INTEGER  PRIMARY KEY,
    height             INTEGER  NOT NULL,
    storage_fee_factor INTEGER  NOT NULL,
    min_value_per_byte INTEGER  NOT NULL,
    max_block_size     INTEGER  NOT NULL,
    max_block_cost     INTEGER  NOT NULL,
    block_version      SMALLINT NOT NULL,
    token_access_cost  INTEGER  NOT NULL,
    input_cost         INTEGER  NOT NULL,
    data_input_cost    INTEGER  NOT NULL,
    output_cost        INTEGER  NOT NULL
    PRIMARY KEY (id)
*/
let EpochsParameterEntity = class EpochsParameterEntity extends typeorm_1.BaseEntity {
    id;
    height;
    storageFeeFactor;
    minValuePerByte;
    maxBlockSize;
    maxBlockCost;
    blockVersion;
    tokenAccessCost;
    inputCost;
    dataInputCost;
    outputCost;
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: "id" }),
    __metadata("design:type", Number)
], EpochsParameterEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "height" }),
    __metadata("design:type", Number)
], EpochsParameterEntity.prototype, "height", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "storage_fee_factor" }),
    __metadata("design:type", Number)
], EpochsParameterEntity.prototype, "storageFeeFactor", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "min_value_per_byte" }),
    __metadata("design:type", Number)
], EpochsParameterEntity.prototype, "minValuePerByte", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "max_block_size" }),
    __metadata("design:type", Number)
], EpochsParameterEntity.prototype, "maxBlockSize", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "max_block_cost" }),
    __metadata("design:type", Number)
], EpochsParameterEntity.prototype, "maxBlockCost", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "block_version" }),
    __metadata("design:type", Number)
], EpochsParameterEntity.prototype, "blockVersion", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "token_access_cost" }),
    __metadata("design:type", Number)
], EpochsParameterEntity.prototype, "tokenAccessCost", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "input_cost" }),
    __metadata("design:type", Number)
], EpochsParameterEntity.prototype, "inputCost", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "data_input_cost" }),
    __metadata("design:type", Number)
], EpochsParameterEntity.prototype, "dataInputCost", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "output_cost" }),
    __metadata("design:type", Number)
], EpochsParameterEntity.prototype, "outputCost", void 0);
EpochsParameterEntity = __decorate([
    (0, typeorm_1.Entity)({ name: "epochs_parameters" })
], EpochsParameterEntity);
exports.EpochsParameterEntity = EpochsParameterEntity;
//# sourceMappingURL=epochs-parameter-entity.js.map