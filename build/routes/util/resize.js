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
// import express from "express";
const sharp_1 = __importDefault(require("sharp"));
const path_1 = __importDefault(require("path"));
// Basic function to resize the image using sharp https://sharp.pixelplumbing.com
function imgResize(filename, width, height) {
    return __awaiter(this, void 0, void 0, function* () {
        const inputFile = path_1.default.join(__dirname, "../../..", "images/full", filename);
        const outputFile = path_1.default.join(__dirname, "../../..", "images/resized", `${width}x${height}${filename}`);
        try {
            yield (0, sharp_1.default)(inputFile)
                .resize(parseInt(width), parseInt(height))
                .toFile(outputFile);
        }
        catch (_a) {
            console.log("Error: Image can't be processed. Please enter the correct filename, width and height");
        }
    });
}
exports.default = imgResize;
