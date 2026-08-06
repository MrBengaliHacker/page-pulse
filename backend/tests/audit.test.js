const request = require("supertest");
const app = require("../src/app");

const auditService = require("../src/services/audit.service");

jest.mock("../src/services/audit.service");

describe("POST /api/audit", () => {

    afterEach(() => {
        jest.clearAllMocks();
    });

    test("should return website audit for a valid URL", async () => {

        auditService.auditWebsite.mockResolvedValue({
            status: 200,
            responseTime: "120 ms",
            title: "Example Domain",
            description: "Example description",
            h1Count: 1,
            missingAltCount: 0,
            wordCount: 50,
        });

        const response = await request(app)
            .post("/api/audit")
            .send({
                url: "https://example.com",
            });

        expect(response.statusCode).toBe(200);

        expect(response.body).toHaveProperty("title");

        expect(response.body).toHaveProperty("status");

        expect(response.body).toHaveProperty("wordCount");
    });

    test("should return 400 for an invalid URL", async () => {

        auditService.auditWebsite.mockRejectedValue(
            new Error("Invalid URL")
        );

        const response = await request(app)
            .post("/api/audit")
            .send({
                url: "abc",
            });

        expect(response.statusCode).toBe(400);

        expect(response.body.message)
            .toBe("Invalid URL");

    });

    test("should return 415 for a non-HTML page", async () => {

        auditService.auditWebsite.mockRejectedValue(
            new Error("Only HTML pages are supported.")
        );

        const response = await request(app)
            .post("/api/audit")
            .send({
                url: "https://example.com/file.pdf",
            });

        expect(response.statusCode).toBe(415);

        expect(response.body.message)
            .toBe("Only HTML pages are supported.");

    });

});