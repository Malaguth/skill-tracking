import { RequestBody } from "../protocols";
import exampleRepo from "../repositories/example-repository";


async function create(exampleBody: RequestBody) {
  const exampleResponse = await exampleRepo.create(exampleBody);

  return exampleResponse;
}

export default {
  create
};