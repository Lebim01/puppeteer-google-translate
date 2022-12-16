"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.translateDocs = exports.translateText = void 0;
const text_1 = __importDefault(require("./translate/text"));
const docs_1 = __importDefault(require("./translate/docs"));
const buildQuery_1 = __importDefault(require("./utils/buildQuery"));
const textArray_1 = __importDefault(require("./translate/textArray"));
const docsArray_1 = __importDefault(require("./translate/docsArray"));
const error_1 = require("./error");
function translateText(text, opt) {
    if (typeof text === 'string')
        return text_1.default(buildQuery_1.default({ text, to: opt.to, from: opt.from, op: 'translate' }), { headless: opt.headless, timeout: opt.timeout });
    if (Array.isArray(text)) {
        if (text.length === 0)
            return error_1.errArrayLenZero();
        const queryArr = [];
        for (let i = 0; i < text.length; i++)
            queryArr[i] = buildQuery_1.default({
                text: text[i],
                to: opt.to,
                from: opt.from,
                op: 'translate'
            });
        return textArray_1.default(queryArr, {
            headless: opt.headless,
            timeout: opt.timeout
        });
    }
    return error_1.errInvalidType(typeof text);
}
exports.translateText = translateText;
function translateDocs(path, opt) {
    if (typeof path === 'string') {
        return docs_1.default(buildQuery_1.default({ to: opt.to, from: opt.from, op: 'docs' }), path, {
            headless: opt.headless,
            timeout: opt.timeout
        });
    }
    if (Array.isArray(path)) {
        if (path.length === 0)
            return error_1.errArrayLenZero();
        const queryArr = [];
        for (let i = 0; i < path.length; i++)
            queryArr[i] = buildQuery_1.default({
                to: opt.to,
                from: opt.from,
                op: 'docs'
            });
        return docsArray_1.default(queryArr, path, {
            headless: opt.headless,
            timeout: opt.timeout
        });
    }
    return error_1.errInvalidType(typeof path);
}
exports.translateDocs = translateDocs;
