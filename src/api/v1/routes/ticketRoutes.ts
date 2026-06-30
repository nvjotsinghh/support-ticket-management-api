import { Router } from "express";

import {
  createTicket,
  getAllTickets,
  getTicketById,
  updateTicket,
} from "../controllers/ticketController";

const router = Router();

router.get("/", getAllTickets);

router.get("/:id", getTicketById);

router.post("/", createTicket);

router.put("/:id", updateTicket);

export default router;