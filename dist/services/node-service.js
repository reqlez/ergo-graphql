"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.nodeService = void 0;
const axios_1 = __importDefault(require("axios"));
const HTTP_PREFIX_PATTERN = /^http(s?):\/\//;
class NodeService {
    _baseUrl;
    constructor() {
        this._baseUrl = process.env.ERGO_NODE_HOST || process.env.ERGO_NODE_ADDRESS;
        this.checkUrl();
    }
    checkUrl() {
        if (!this._baseUrl) {
            throw Error("ERGO_NODE_ADDRESS is undefined.");
        }
        else if (!HTTP_PREFIX_PATTERN.test(this._baseUrl)) {
            throw Error("ERGO_NODE_ADDRESS should be http:// or https:// prefixed.");
        }
    }
    checkTransaction(transaction) {
        return axios_1.default.post(this._baseUrl + "/transactions/check", transaction);
    }
    submitTransaction(transaction) {
        return axios_1.default.post(this._baseUrl + "/transactions", transaction);
    }
    getNodeInfo() {
        return axios_1.default.get(this._baseUrl + "/info");
    }
}
exports.nodeService = new NodeService();
//# sourceMappingURL=node-service.js.map