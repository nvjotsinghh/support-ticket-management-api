import { Router } from "express";
import {
  createTicket,
  getAllTickets,
  getTicketById,
} from "../controllers/ticketController";

const router = Router();

router.get("/", getAllTickets);

router.get("/:id", getTicketById);

router.post("/", createTicket);

export default router;