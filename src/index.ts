import dotenv from 'dotenv'
dotenv.config();
import express, { Request, Response } from "express";
import cookieParser from 'cookie-parser';

const app = express();

app.get('/', (req: Request, res: Response) => {
    res.send("Helo worldd")
})

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port: http://localhost:${process.env.PORT}`)
})