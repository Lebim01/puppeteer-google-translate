"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const launch_1 = __importDefault(require("../launch"));
exports.default = async (query, opt) => {
    const { browser, page, timeout } = await launch_1.default(opt);
    try {
        await page.goto('https://translate.google.com/' + query);
        const el1 = await page.waitForSelector('span[jsname="txFAF"]>span', {
            timeout
        });
        return [await el1.evaluate((e) => e.textContent)];
    }
    catch (err) {
        throw err;
    }
    finally {
        await browser.close();
    }
};
