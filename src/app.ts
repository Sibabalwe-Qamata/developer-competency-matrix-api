import express, {
    Request,
    Response,
    NextFunction
} from "express";
import cors from "cors";
import { json } from "body-parser";
// import { router } from "../src/features/cs-fundamentals/adapters/routes/create-matrix-routes";


const app  = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(json());


app.use('/cs_fundamentals');


app.use((err:Error, req:Request, res: Response, next: NextFunction)=>{
    res.status(500).json({message:err.message})
});

 const PORT = process.env.Port || 8081 
app.listen(PORT)