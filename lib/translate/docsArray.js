"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const launch_1 = __importDefault(require("../launch"));
const error_1 = require("../error");
const docsValid_1 = require("../utils/docsValid");
exports.default = async (query, path, opt) => {
    const { browser, page, timeout } = await launch_1.default(opt);
    const result = [];
    for (let i = 0; i < query.length; i++) {
        try {
            const extension = path[i].split('.').pop();
            if (!docsValid_1.isExtensionValid(extension))
                return error_1.errFileType(extension);
            if (!docsValid_1.isFileSizeValid(path[i]))
                return error_1.errFileSize();
            await page.goto('https://translate.google.com/' + query[i]);
            const [fileChooser] = await Promise.all([
                page.waitForFileChooser(),
                page.click('label')
            ]);
            await fileChooser.accept([path[i]]);
            await page.click('form>div>div>div>button');
            await page.waitForNavigation();
            let el;
            if (extension === 'txt')
                el = await page.waitForSelector('pre', { timeout });
            else
                el = await page.waitForSelector('font>font', { timeout });
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
