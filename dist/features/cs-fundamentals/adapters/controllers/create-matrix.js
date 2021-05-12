"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMatrix = void 0;
const matrix_1 = require("../../domain/entities/matrix");
const MatrixList = [];
const createMatrix = (req, res, next) => {
    const cs_fundamental = req.body.text;
    const algorithms = req.body.text;
    const systems_progamming = req.body.text;
    const newMatrixs = new matrix_1.Matrix(cs_fundamental, algorithms, systems_progamming);
    MatrixList.push(newMatrixs);
    res.status(201).json({ message: "Matrix created", createMatrix: newMatrixs });
};
exports.createMatrix = createMatrix;
