import { RequestHandler } from "express";
import { Matrix } from "../../domain/entities/matrix";

const MatrixList = [];

export const createMatrix : RequestHandler = (req, res, next) =>{

    const cs_fundamental = req.body.text;
    const algorithms = req.body.text
    const systems_progamming = req.body.text;

    const newMatrixs = new Matrix(cs_fundamental, algorithms, systems_progamming)

    MatrixList.push(newMatrixs)
    res.status(201).json({message:"Matrix created", createMatrix:newMatrixs})

};