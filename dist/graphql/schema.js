"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSchema = void 0;
const path_1 = require("path");
const type_graphql_1 = require("type-graphql");
const graphql_1 = require("graphql");
const resolvers_1 = require("./resolvers");
async function generateSchema() {
    const schema = await (0, type_graphql_1.buildSchema)({
        emitSchemaFile: (0, path_1.join)(process.cwd(), "src/graphql/schema.graphql"),
        validate: false,
        resolvers: [
            resolvers_1.BoxResolver,
            resolvers_1.TokenResolver,
            resolvers_1.InputResolver,
            resolvers_1.TransactionResolver,
            resolvers_1.DataInputResolver,
            resolvers_1.HeaderResolver,
            resolvers_1.AddressResolver,
            resolvers_1.MempoolResolver,
            resolvers_1.BlockResolver,
            resolvers_1.InfoResolver,
            resolvers_1.StateResolver
        ],
        scalarsMap: [
            { type: Number, scalar: type_graphql_1.Int },
            { type: BigInt, scalar: graphql_1.GraphQLString }
        ]
    });
    console.log("✅ GraphQL schema generated");
    return schema;
}
exports.generateSchema = generateSchema;
//# sourceMappingURL=schema.js.map