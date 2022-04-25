"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./routes/router"));
// Setting up the server using Express
const app = (0, express_1.default)();
exports.app = app;
const port = 3000;
app.use("/", router_1.default);
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
