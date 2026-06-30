import { Request, Response } from "express";
import ticketService from "../services/ticketService";
import { HTTP_STATUS } from "../../../constants/httpStatus";

export const getAllTickets = (
  _req: Request,
  res: Response
): void => {
  res.status(HTTP_STATUS.OK).json({
    success: true,
    data: ticketService.getAllTickets(),
  });
};

export const getTicketById = (
  req: Request,
  res: Response
): void => {
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