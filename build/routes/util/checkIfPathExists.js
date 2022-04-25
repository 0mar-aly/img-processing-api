"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
function checkIfPathExists(imgPath) {
    // Using fs.existsSync because fs.exists is deprecated https://nodejs.org/api/fs.html
    return fs_1.default.existsSync(imgPath);
}
exports.default = checkIfPathExists;
