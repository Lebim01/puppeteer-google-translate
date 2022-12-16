"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFileSizeValid = exports.isExtensionValid = void 0;
const fs_1 = require("fs");
function isExtensionValid(extension) {
    if ([
        'doc',
        'docx',
        'odf',
        'pdf',
        'ppt',
        'pptx',
        'ps',
        'rtf',
        'txt',
        'xls',
        'xlsx'
    ].includes(extension))
        return true;
    return false;
}
exports.isExtensionValid = isExtensionValid;
function isFileSizeValid(path) {
    const stat = fs_1.statSync(path);
    if (stat.size > 1048576)
        return false;
    return true;
}
exports.isFileSizeValid = isFileSizeValid;
