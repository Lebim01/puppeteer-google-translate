import puppeteer from 'puppeteer';
import { PuppeteerOptions } from './types';
declare const _default: (opt: PuppeteerOptions) => Promise<{
    browser: puppeteer.Browser;
    page: puppeteer.Page;
    timeout: number;
}>;
export default _default;
