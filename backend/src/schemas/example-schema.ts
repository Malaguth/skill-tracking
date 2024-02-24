import joi from "joi";
import { CreateRequestBody } from "../protocols";

export const CreateRequestBodySchema = joi.object<CreateRequestBody>({
  example: joi.string().required(),
});

