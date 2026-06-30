import { Ticket } from "../models/ticket";

const priorityScore = {
  low: 10,
  medium: 20,
  high: 30,
  critical: 50,
};

export interface UrgencyResult {
  urgencyScore: number;
  urgencyLevel: string;
}

class UrgencyService {
  calculateUrgency(ticket: Ticket): UrgencyResult {
    if (ticket.status === "resolved") {
      return {
        urgencyScore: 0,
        urgencyLevel: "RESOLVED",
      };
    }

    const createdDate = new Date(ticket.createdAt);

    const currentDate = new Date();

    const ageInDays = Math.floor(
      (currentDate.getTime() - createdDate.getTime()) /
        (1000 * 60 * 60 * 24)
    );

    const urgencyScore =
      priorityScore[ticket.priority] + ageInDays * 5;

    let urgencyLevel = "LOW";

    if (urgencyScore >= 70) {
      urgencyLevel = "CRITICAL";
    } else if (urgencyScore >= 50) {
      urgencyLevel = "HIGH";
    } else if (urgencyScore >= 30) {
      urgencyLevel = "MEDIUM";
    }

    return {
      urgencyScore,
      urgencyLevel,
    };
  }
}

export default new UrgencyService();