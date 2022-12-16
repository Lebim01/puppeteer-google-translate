import launch from '../launch';
import { PuppeteerOptions } from '../types';

export default async (
	query: string,
	opt: PuppeteerOptions
): Promise<string> => {
	const { browser, page, timeout } = await launch(opt);
	try {
		await page.goto('https://translate.google.com/' + query);
		const el1 = await page.waitForSelector('span[jsname="txFAF"]>span', {
		    timeout
		});
		return [await el1.evaluate((e) => e.textContent)];
	} catch (err) {
		throw err;
	} finally {
		await browser.close();
	}
};
