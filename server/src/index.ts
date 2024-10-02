
import express, { Request, Response } from "express";
import cors from "cors";
const app = express();

const port = 3000;

app.use(express.json());
app.use(cors());
app.get("/api/sample", (request:Request,response:Response)=>{
    response.json({message: "Hello from Backend!"});
})

app.listen(port,()=>{
    console.log(`running port on ${port}`);
});


