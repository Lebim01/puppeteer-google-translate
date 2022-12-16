declare function errFileSize(): never;
declare function errFileType(type: string): never;
declare function errInvalidType(type: string): never;
declare function errTextOverflow(len: number): never;
declare function errTextLenZero(): never;
declare function errArrayLenZero(): never;
export { errFileSize, errFileType, errInvalidType, errTextLenZero, errTextOverflow, errArrayLenZero };
