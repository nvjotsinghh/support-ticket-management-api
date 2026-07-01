import urgencyService from "../src/api/v1/services/urgencyService";

describe("Urgency Service", () => {
  it("should return resolved ticket", () => {
    const result = urgencyService.calculateUrgency({
      id: 1,
      title: "",
      description: "",
      priority: "high",
      status: "resolved",
      createdAt: new Date().toISOString(),
    });

    expect(result.urgencyLevel).toBe("RESOLVED");
  });

  it("should calculate low urgency", () => {
    const result = urgencyService.calculateUrgency({
      id: 1,
      title: "",
      description: "",
      priority: "low",
      status: "open",
      createdAt: new Date().toISOString(),
    });

    expect(result.urgencyLevel).toBe("LOW");
  });

  it("should calculate high urgency", () => {
    const result = urgencyService.calculateUrgency({
      id: 1,
      title: "",
      description: "",
      priority: "critical",
      status: "open",
      createdAt: "2025-01-01T00:00:00.000Z",
    });

    expect(result.urgencyLevel).toBe("CRITICAL");
  });

  it("should return urgency score", () => {
    const result = urgencyService.calculateUrgency({
      id: 1,
      title: "",
      description: "",
      priority: "medium",
      status: "open",
      createdAt: new Date().toISOString(),
    });

    expect(result.urgencyScore).toBeGreaterThan(0);
  });
});