"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseContext = void 0;
const typeorm_graphql_loader_1 = __importDefault(require("@mando75/typeorm-graphql-loader"));
const entities_1 = require("../entities");
const base_repository_1 = require("./base-repository");
const box_repository_1 = require("./box-repository");
const header_repository_1 = require("./header-repository");
const transactions_repository_1 = require("./transactions-repository");
const unconfirmed_box_repository_1 = require("./unconfirmed-box-repository");
const unconfirmed_transactions_repository_1 = require("./unconfirmed-transactions-repository");
const unconfirmed_input_repository_1 = require("./unconfirmed-input-repository");
const epochs_repository_1 = require("./epochs-repository");
const token_repository_1 = require("./token-repository");
const blocks_repository_1 = require("./blocks-repository");
class DatabaseContext {
    transactions;
    blockInfo;
    boxes;
    dataInputs;
    inputs;
    headers;
    tokens;
    epochs;
    unconfirmedBoxes;
    unconfirmedTransactions;
    unconfirmedInputs;
    constructor(dataSource) {
        const context = {
            dataSource,
            graphQLDataLoader: new typeorm_graphql_loader_1.default(dataSource)
        };
        this.transactions = new transactions_repository_1.TransactionRepository(context);
        this.boxes = new box_repository_1.BoxRepository(context);
        this.headers = new header_repository_1.HeaderRepository(context);
        this.epochs = new epochs_repository_1.EpochsRepository(context);
        this.unconfirmedTransactions = new unconfirmed_transactions_repository_1.UnconfirmedTransactionRepository(context);
        this.unconfirmedBoxes = new unconfirmed_box_repository_1.UnconfirmedBoxRepository(context);
        this.unconfirmedInputs = new unconfirmed_input_repository_1.UnconfirmedInputRepository(context);
        this.tokens = new token_repository_1.TokenRepository(context);
        this.blockInfo = new blocks_repository_1.BlocksRepository(context);
        const defaults = { where: { mainChain: true } };
        this.dataInputs = new base_repository_1.BaseRepository(entities_1.DataInputEntity, "dti", { context, defaults });
        this.inputs = new base_repository_1.BaseRepository(entities_1.InputEntity, "input", { context, defaults });
    }
}
exports.DatabaseContext = DatabaseContext;
//# sourceMappingURL=database-context.js.map