import { Router } from "express";

import {
  createTicket,
  deleteTicket,
  getAllTickets,
  getTicketById,
  updateTicket,
} from "../controllers/ticketController";

const router = Router();

router.get("/", getAllTickets);

router.get("/:id", getTicketById);

router.post("/", createTicket);

router.put("/:id", updateTicket);

router.delete("/:id", deleteTicket);

export default router;