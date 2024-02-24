import { validateSchemaMiddleware } from "../middlewares/schema-validator";
import { Router } from "express";
import { CreateRequestBodySchema } from "../schemas/example-schema";
import { create } from "../controllers/example-controller";

const exampleRouter = Router();

exampleRouter.post("/", validateSchemaMiddleware(CreateRequestBodySchema), create);

export default exampleRouter;