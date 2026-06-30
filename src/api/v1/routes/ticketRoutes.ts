import { Router } from "express";
import { getAllTickets } from "../controllers/ticketController";

const router = Router();

router.get("/", getAllTickets);

export default router;