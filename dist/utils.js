"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeUndefined = void 0;
function removeUndefined(value) {
    const result = {};
    for (const key in value) {
        const val = value[key];
        if (val !== undefined && val !== null) {
            result[key] = val;
        }
    }
    return result;
}
exports.removeUndefined = removeUndefined;
//# sourceMappingURL=utils.js.map