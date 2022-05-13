const supertest = require("supertest");
const server = require("../index.js");

const API = "http://localhost:5000";

describe("POST /points/addPoints", () => {
  it("should Post a new transaction", async () => {
    const transaction = {
      payer: "DANNON",
      points: 300,
      time: "10/31/2020 10:00 AM",
    };
    const res = await supertest(API)
      .post("/points/addPoints")
      .send(transaction);
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ DANNON: 300 });
  });

  it("should NOT Post a new transaction", async () => {
    const transaction = {
      payer: "DANNON",
      points: 300,
      time: "10/31/2020 10:00 AM",
      extra: "extra",
    };
    const res = await supertest(API)
      .post("/points/addPoints")
      .send(transaction);
    expect(res.status).toBe(422);
  });
});
