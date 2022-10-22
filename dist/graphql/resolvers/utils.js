"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFieldSelected = exports.getArgumentValue = void 0;
const graphql_1 = require("graphql");
const lodash_1 = require("lodash");
function getArgumentValue(info, field, argumentName) {
    let node = getMainNode(info);
    node = findField(node?.selectionSet, field);
    if (!node || (0, lodash_1.isEmpty)(node.arguments)) {
        return;
    }
    const arg = node.arguments?.find((arg) => arg.name.value === argumentName);
    if (arg?.value.kind === "Variable") {
        return info.variableValues[arg.value.name.value];
    }
    else {
        return arg?.value?.value;
    }
}
exports.getArgumentValue = getArgumentValue;
function isFieldSelected(info, field) {
    const fields = field.split(".");
    let node = getMainNode(info);
    for (const field of fields) {
        node = findField(node?.selectionSet, field);
        if (!node) {
            return false;
        }
    }
    return true;
}
exports.isFieldSelected = isFieldSelected;
function getMainNode(info) {
    return info.fieldNodes.find((n) => n.name.value === info.fieldName);
}
function findField(selectionSet, field) {
    if (!selectionSet) {
        return;
    }
    return selectionSet.selections.find((s) => s.kind === graphql_1.Kind.FIELD && s.name.value === field);
}
//# sourceMappingURL=utils.js.map