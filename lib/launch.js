"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const puppeteer_1 = __importDefault(require("puppeteer"));
exports.default = async (opt) => {
    const browser = await puppeteer_1.default.launch({
        headless: opt.headless === null ? true : opt.headless
    });
    const [page] = await browser.pages();
    const timeout = opt.timeout === null ? 10000 : opt.timeout;
    return { browser, page, timeout };
};
