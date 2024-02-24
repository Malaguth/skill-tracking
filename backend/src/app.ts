import express, { json, Request, Response } from "express";
import "express-async-errors";
import cors from "cors";
import dotenv from "dotenv";

import { handleApplicationErrors } from "./middlewares/error-handler";
import exampleRouter from "./routers/example-router";

dotenv.config();

const app = express();
app.use(cors());
app.use(json());

app.get("/health", (req: Request, res: Response) => res.send("Skill Tracking ready to go!"));
app.use("/example", exampleRouter);
app.use(handleApplicationErrors);

export default app;