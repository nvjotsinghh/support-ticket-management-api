import { tickets } from "../../../data/tickets";
import { Ticket } from "../models/ticket";

class TicketService {
  getAllTickets(): Ticket[] {
    return tickets;
  }

  getTicketById(id: number): Ticket | undefined {
    return tickets.find((ticket) => ticket.id === id);
  }
}

export default new TicketService();