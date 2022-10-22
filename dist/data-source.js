"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeDataSource = exports.appDataSource = void 0;
const typeorm_1 = require("typeorm");
const entities = __importStar(require("./entities"));
const { DB_HOST, DB_PORT, DB_NAME, DB_USER_NAME, DB_USER_PWD, DB_SSL, TS_NODE_DEV } = process.env;
exports.appDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: DB_HOST,
    port: Number.parseInt(DB_PORT, 10),
    database: DB_NAME,
    username: DB_USER_NAME,
    password: DB_USER_PWD,
    ssl: getSslParam(),
    logging: TS_NODE_DEV === "true",
    synchronize: false,
    entities,
    subscribers: []
});
function getSslParam() {
    if (!DB_SSL) {
        return undefined;
    }
    const normalized = DB_SSL.toLowerCase();
    if (normalized == "false") {
        return false;
    }
    return true;
}
async function initializeDataSource() {
    const connection = await exports.appDataSource.initialize();
    console.log("✅ Data source connected");
    return connection;
}
exports.initializeDataSource = initializeDataSource;
//# sourceMappingURL=data-source.js.map