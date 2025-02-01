"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const zod_1 = require("zod");
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
const sumInput = zod_1.z.object({
    a: zod_1.z.number(),
    b: zod_1.z.number()
});
exports.app.post("/sum", (req, res) => {
    const parsedresponse = sumInput.parse(req.body);
    if (!parsedresponse) {
        res.status(400).send("Invalid input");
        return;
    }
    const answer = parsedresponse.a + parsedresponse.b;
    res.json({ answer });
});
exports.app.get("/sum", (req, res) => {
    const parsedresponse = sumInput.parse(req.body);
    if (!parsedresponse) {
        res.status(400).send("Invalid input");
        return;
    }
    const answer = parsedresponse.a + parsedresponse.b;
    res.json({ answer });
});
