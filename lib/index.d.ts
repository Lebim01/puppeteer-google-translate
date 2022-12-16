import { Options } from './types';
declare function translateText(text: string | string[], opt: Options): Promise<string | string[]>;
declare function translateDocs(path: string | string[], opt: Options): Promise<string | string[]>;
export { translateText, translateDocs };
