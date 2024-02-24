import { ApplicationError } from "../middlewares/error-handler";

export function badRequestError(message?: string): ApplicationError {
  const errorMsg = message || "Bad Resquest";
  return {
    name: "BadRequestError",
    message: errorMsg
  }
}