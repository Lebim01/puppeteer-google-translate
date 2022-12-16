"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const launch_1 = __importDefault(require("../launch"));
exports.default = async (query, opt) => {
    const { browser, page, timeout } = await launch_1.default(opt);
    const result = [];
    for (let i = 0; i < query.length; i++) {
        try {
            await page.goto('https://translate.google.com/' + query[i]);
            const el = await page.waitForSelector('span>span>span[jsaction]', {
                timeout
            });
            result[i] = await el.evaluate((e) => e.textContent);
        }
        catch (err) {
            await browser.close();
            throw err;
        }
    }
    await browser.close();
    return result;
};
