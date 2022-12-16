"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const error_1 = require("../error");
exports.default = (opt) => {
    const { text, to, op } = opt;
    const from = opt.from || 'auto';
    if (opt.op === 'translate') {
        if (text.length > 5000)
            return error_1.errTextOverflow(text.length);
        if (text.length === 0)
            return error_1.errTextLenZero();
    }
    return `?text=${encodeURIComponent(text)}&sl=${from}&tl=${to}&op=${op}`;
};
