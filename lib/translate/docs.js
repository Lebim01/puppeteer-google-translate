"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const launch_1 = __importDefault(require("../launch"));
const error_1 = require("../error");
const docsValid_1 = require("../utils/docsValid");
exports.default = async (query, path, opt) => {
    const extension = path.split('.').pop();
    if (!docsValid_1.isExtensionValid(extension))
        return error_1.errFileType(extension);
    if (!docsValid_1.isFileSizeValid(path))
        return error_1.errFileSize();
    const { browser, page, timeout } = await launch_1.default(opt);
    try {
        await page.goto('https://translate.google.com/' + query);
        const [fileChooser] = await Promise.all([
            page.waitForFileChooser(),
            page.click('label')
        ]);
        await fileChooser.accept([path]);
        await page.click('form>div>div>div>button');
        await page.waitForNavigation();
        let el;
        if (extension === 'txt')
            el = await page.waitForSelector('pre', { timeout });
        else
            el = await page.waitForSelector('font>font', { timeout });
        const result = await el.evaluate((e) => e.textContent);
        return result;
    }
    catch (err) {
        throw err;
    }
    finally {
        await browser.close();
    }
};
