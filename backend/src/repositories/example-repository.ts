import { RequestBody } from "../protocols"

async function create(data : RequestBody) {
  return await {
    example: "example is working fine!"
  }
}

export default {
  create
}