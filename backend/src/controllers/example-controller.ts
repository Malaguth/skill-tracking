import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { RequestBody } from "../protocols";
import exampleService from "../services/example-service";

export async function create(req: Request, res: Response, next: NextFunction) {
  const requestInput = req.body as RequestBody;
  try {
    const response = await exampleService.create(requestInput);
    res.send(response).status(httpStatus.CREATED);
  } catch (error) {
    next(error);
  }
}

