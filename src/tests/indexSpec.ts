import supertest from "supertest";
import { app } from "../index";

const request = supertest(app);
describe("testing the main server function in index.ts", () => {
    it("expects status code to be 200", async () => {
        const response = request.get(
            "/api?filename=santamonica.jpg&width=160&height=90"
        );
        expect((await response).status).toEqual(200);
    });
});
