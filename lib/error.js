"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errArrayLenZero = exports.errTextOverflow = exports.errTextLenZero = exports.errInvalidType = exports.errFileType = exports.errFileSize = void 0;
function errFileSize() {
    throw new Error('Document size exceeds 10MB');
}
exports.errFileSize = errFileSize;
function errFileType(type) {
    throw new Error(`Extension .${type} not supported`);
}
exports.errFileType = errFileType;
function errInvalidType(type) {
    throw new Error(`Expected string or string array, received ${type}`);
}
exports.errInvalidType = errInvalidType;
function errTextOverflow(len) {
    throw new Error(`Expected <= 5000 characters, received ${len}`);
}
exports.errTextOverflow = errTextOverflow;
function errTextLenZero() {
    throw new Error('Expected one or more character, received none');
}
exports.errTextLenZero = errTextLenZero;
function errArrayLenZero() {
    throw new Error('Expected one or more element, received none');
}
exports.errArrayLenZero = errArrayLenZero;
