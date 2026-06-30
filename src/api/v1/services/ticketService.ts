import { tickets } from "../../../data/tickets";
import {
  Ticket,
  TicketPriority,
  TicketStatus,
} from "../models/ticket";

class TicketService {
  getAllTickets(): Ticket[] {
    return tickets;
  }

  getTicketById(id: number): Ticket | undefined {
    return tickets.find((ticket) => ticket.id === id);
  }

  createTicket(data: {
    title: string;
    description: string;
    priority: TicketPriority;
  }): Ticket {
    const newTicket: Ticket = {
      id:
        tickets.length > 0
          ? Math.max(...tickets.map((t) => t.id)) + 1
          : 1,
      title: data.title,
      description: data.description,
      priority: data.priority,
      status: "open",
      createdAt: new Date().toISOString(),
    };

    tickets.push(newTicket);

    return newTicket;
  }

  updateTicket(
    id: number,
    updates: Partial<Ticket>
  ): Ticket | undefined {
    const ticket = tickets.find((t) => t.id === id);

    if (!ticket) {
      return undefined;
    }

    Object.assign(ticket, updates);

    return ticket;
  }
}

export default new TicketService();