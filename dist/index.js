"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
require("reflect-metadata");
const apollo_server_1 = require("apollo-server");
const apollo_server_cache_redis_1 = require("apollo-server-cache-redis");
const apollo_server_core_1 = require("apollo-server-core");
const apollo_server_plugin_response_cache_1 = __importDefault(require("apollo-server-plugin-response-cache"));
const graphql_depth_limit_1 = __importDefault(require("graphql-depth-limit"));
const block_watcher_1 = require("./block-watcher");
const caching_1 = require("./caching");
const consts_1 = require("./consts");
const database_context_1 = require("./context/database-context");
const data_source_1 = require("./data-source");
const schema_1 = require("./graphql/schema");
const services_1 = require("./services");
const { TS_NODE_DEV, MAX_QUERY_DEPTH } = process.env;
(async () => {
    const [dataSource, schema] = await Promise.all([(0, data_source_1.initializeDataSource)(), (0, schema_1.generateSchema)()]);
    const dataContext = new database_context_1.DatabaseContext(dataSource);
    services_1.nodeService.checkUrl();
    startBlockWatcher(dataContext);
    await startServer(schema, dataContext);
})();
async function startServer(schema, dataContext) {
    const server = new apollo_server_1.ApolloServer({
        csrfPrevention: true,
        schema,
        introspection: true,
        context: { repository: dataContext },
        plugins: [
            (0, apollo_server_core_1.ApolloServerPluginCacheControl)({
                defaultMaxAge: consts_1.MAX_CACHE_AGE,
                calculateHttpHeaders: true
            }),
            (0, apollo_server_plugin_response_cache_1.default)({
                cache: new apollo_server_cache_redis_1.BaseRedisCache({ client: caching_1.redisClient })
            }),
            (0, apollo_server_core_1.ApolloServerPluginLandingPageGraphQLPlayground)()
        ],
        validationRules: [
            (0, graphql_depth_limit_1.default)(MAX_QUERY_DEPTH ? parseInt(MAX_QUERY_DEPTH, 10) : consts_1.DEFAULT_MAX_QUERY_DEPTH, undefined, (depths) => {
                if (TS_NODE_DEV === "true") {
                    console.log("Query depths:", depths);
                }
            })
        ]
    });
    const { url } = await server.listen({ port: 3000 });
    console.log(`🚀 Server ready at ${url}`);
}
async function startBlockWatcher(dataContext) {
    block_watcher_1.blockWatcher.start(dataContext.headers).onNewBlock(() => caching_1.redisClient.flushdb());
    console.log("🚀 Block watcher started");
}
//# sourceMappingURL=index.js.map