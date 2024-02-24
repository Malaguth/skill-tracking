import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

export type ApplicationError = {
  name: string;
  message: string;
};

export function handleApplicationErrors(err: ApplicationError | Error, _req: Request, res: Response, next: NextFunction) {

  if (err.name === "NotFoundError") {
    return res.status(httpStatus.NOT_FOUND).send({
      message: err.message,
    });
  }

  if (err.name === "BadRequestError") {
    return res.status(httpStatus.BAD_REQUEST).send({
      message: err.message,
    });
  }

  /* eslint-disable-next-line no-console */
  res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
    error: err.message,
    message: err.name,
  });
}