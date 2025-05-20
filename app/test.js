const request = require("supertest");
const assert = require("assert");
const app = require("../app"); // adjust path if app is in a subfolder

describe("ToDo App Basic Tests", () => {

  it("GET /todo should return 200", async () => {
    const res = await request(app).get("/todo");
    assert.strictEqual(res.status, 200);
  });

  it("POST /todo/add/ should add a new todo item", async () => {
    const res = await request(app)
      .post("/todo/add/")
      .send("newtodo=LearnTesting");

    assert.strictEqual(res.status, 302); // redirection to /todo
  });

  it("GET /todo/0 should show the first todo item", async () => {
    const res = await request(app).get("/todo/0");
    assert.strictEqual(res.status, 200);
    assert.ok(res.text.includes("LearnTesting"));
  });

  it("PUT /todo/edit/0 should update the first todo item", async () => {
    const res = await request(app)
      .post("/todo/edit/0?_method=PUT")
      .send("editTodo=LearnMocha");

    assert.strictEqual(res.status, 302); // redirection to /todo
  });

  it("GET /todo/delete/0 should delete the first todo item", async () => {
    const res = await request(app).get("/todo/delete/0");
    assert.strictEqual(res.status, 302); // redirection to /todo
  });

});