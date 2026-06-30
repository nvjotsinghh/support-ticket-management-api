import { Request, Response } from "express";
import ticketService from "../services/ticketService";
import { HTTP_STATUS } from "../../../constants/httpStatus";

const validPriorities = [
  "critical",
  "high",
  "medium",
  "low",
];

export const getAllTickets = (_req: Request, res: Response): void => {
  res.status(HTTP_STATUS.OK).json({
    success: true,
    data: ticketService.getAllTickets(),
  });
};

export const getTicketById = (req: Request, res: Response): void => {
  const id = Number(req.params.id);

  const ticket = ticketService.getTicketById(id);

  if (!ticket) {
    res.status(HTTP_STATUS.NOT_FOUND).json({
      success: false,
      message: "Ticket not found",
    });
    return;
  }

  res.status(HTTP_STATUS.OK).json({
    success: true,
    data: ticket,
  });
};

export const createTicket = (req: Request, res: Response): void => {
  const { title, description, priority } = req.body;

  if (!title) {
    res.status(HTTP_STATUS.BAD_REQUEST).json({
      success: false,
      message: "Missing required field: title",
    });
    return;
  }

  if (!description) {
    res.status(HTTP_STATUS.BAD_REQUEST).json({
      success: false,
      message: "Missing required field: description",
    });
    return;
  }

  if (!validPriorities.includes(priority)) {
    res.status(HTTP_STATUS.BAD_REQUEST).json({
      success: false,
      message:
        "Invalid priority. Must be one of: critical, high, medium, low",
    });
    return;
  }

  const ticket = ticketService.createTicket({
    title,
    description,
    priority,
  });

  res.status(HTTP_STATUS.CREATED).json({
    success: true,
    data: ticket,
  });
};