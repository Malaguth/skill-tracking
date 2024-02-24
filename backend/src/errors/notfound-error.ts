import { ApplicationError } from "../middlewares/error-handler";

export function notFoundError(message?: string): ApplicationError {
  const errorMsg = message || "Not Found";
  return {
    name: "NotFoundError",
    message: errorMsg
  }
}