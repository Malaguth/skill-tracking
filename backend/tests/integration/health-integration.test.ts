import supertest from "supertest";
import app from "../../src/app";

const api = supertest(app);

describe("GET /health", () => {
  it("should return status 200", async () => {
    const { status, text } = await api.get("/health");
    expect(status).toBe(200);
    expect(text).toBe("ok!");
  })
})
