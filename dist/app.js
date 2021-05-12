"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = require("body-parser");
// import { router } from "../src/features/cs-fundamentals/adapters/routes/create-matrix-routes";
const app = express_1.default();
app.use(cors_1.default());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use(body_parser_1.json());
app.use('/cs_fundamentals');
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
const PORT = process.env.Port || 8081;
app.listen(PORT);
