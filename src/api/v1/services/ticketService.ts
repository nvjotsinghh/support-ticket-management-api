import { tickets } from "../../../data/tickets";
import { Ticket } from "../models/ticket";

export class TicketService {
  getAllTickets(): Ticket[] {
    return tickets;
  }
}

export default new TicketService();