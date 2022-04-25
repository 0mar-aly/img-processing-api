"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const checkIfPathExists_1 = __importDefault(require("../../../routes/util/checkIfPathExists"));
it("expects the path of the root folder to exist", () => {
    expect((0, checkIfPathExists_1.default)("../../..")).toBe(true);
});
