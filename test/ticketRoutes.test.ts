import request from "supertest";
import app from "../src/app";

describe("Support Ticket API", () => {

  describe("Health Endpoint", () => {

    it("should return api health", async () => {

      const response = await request(app)
        .get("/health");

      expect(response.status).toBe(200);

      expect(response.body.success).toBe(true);

    });

  });

  describe("GET /tickets", () => {

    it("should return all tickets", async () => {

      const response = await request(app)
        .get("/api/v1/tickets");

      expect(response.status).toBe(200);

      expect(Array.isArray(response.body.data)).toBe(true);

    });

  });

  describe("GET Ticket By Id", () => {

    it("should return ticket", async () => {

      const response = await request(app)
        .get("/api/v1/tickets/1");

      expect(response.status).toBe(200);

      expect(response.body.data.id).toBe(1);

    });

    it("should return 404", async () => {

      const response = await request(app)
        .get("/api/v1/tickets/500");

      expect(response.status).toBe(404);

    });

  });

  describe("POST Ticket", () => {

    it("should create ticket", async () => {

      const response = await request(app)
        .post("/api/v1/tickets")
        .send({
          title: "Testing",
          description: "Testing API",
          priority: "high",
        });

      expect(response.status).toBe(201);

      expect(response.body.data.title)
        .toBe("Testing");

    });

    it("should validate title", async () => {

      const response = await request(app)
        .post("/api/v1/tickets")
        .send({
          description: "Testing",
          priority: "high",
        });

      expect(response.status).toBe(400);

    });

  });

  describe("PUT Ticket", () => {

    it("should update ticket", async () => {

      const response = await request(app)
        .put("/api/v1/tickets/1")
        .send({
          status: "resolved",
        });

      expect(response.status).toBe(200);

      expect(response.body.data.status)
        .toBe("resolved");

    });

  });

  describe("DELETE Ticket", () => {

    it("should delete ticket", async () => {

      await request(app)
        .post("/api/v1/tickets")
        .send({
          title: "Delete Ticket",
          description: "Delete",
          priority: "low",
        });

      const response = await request(app)
        .delete("/api/v1/tickets/8");

      expect(response.status).toBe(200);

    });

  });

  describe("Urgency Endpoint", () => {

    it("should return urgency", async () => {

      const response = await request(app)
        .get("/api/v1/tickets/1/urgency");

      expect(response.status).toBe(200);

      expect(response.body.data)
        .toHaveProperty("urgencyScore");

      expect(response.body.data)
        .toHaveProperty("urgencyLevel");

    });

  });

});