"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const resize_1 = __importDefault(require("../util/resize"));
const checkIfPathExists_1 = __importDefault(require("../util/checkIfPathExists"));
const processor = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const outPath = path_1.default.join(__dirname, "../../..", "images/resized", `${req.query.width}x${req.query.height}${req.query.filename}`);
    const inPath = path_1.default.join(__dirname, "../../..", "images/full", `${req.query.filename}`);
    const originalImgExists = (0, checkIfPathExists_1.default)(inPath);
    const resizedImgExists = (0, checkIfPathExists_1.default)(outPath);
    // Checking if the filename in the URL exists
    if (originalImgExists) {
        // Checking if an output with the same filename exists (cached)
        if (resizedImgExists) {
            res.sendFile(outPath);
        }
        else {
            yield (0, resize_1.default)(req.query.filename, req.query.width, req.query.height);
            if (isNaN(parseInt(req.query.width)) ||
                isNaN(parseInt(req.query.height))) {
                next("Error: Invalid width or height");
            }
            else
                res.sendFile(outPath);
        }
    }
    else {
        next("Error: File does not exist");
    }
});
exports.default = processor;
