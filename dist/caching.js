"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.redisClient = void 0;
const ioredis_1 = __importDefault(require("ioredis"));
const utils_1 = require("./utils");
const { REDIS_HOST, REDIS_PORT, REDIS_USER_NAME, REDIS_USER_PWD } = process.env;
exports.redisClient = new ioredis_1.default((0, utils_1.removeUndefined)({
    host: REDIS_HOST || "localhost",
    port: REDIS_PORT ? Number.parseInt(REDIS_PORT, 10) : 6379,
    username: REDIS_USER_NAME,
    password: REDIS_USER_PWD,
    name: "ergo-graphql"
}));
//# sourceMappingURL=caching.js.map