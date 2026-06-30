import { Request, Response } from "express";
import ticketService from "../services/ticketService";
import { HTTP_STATUS } from "../../../constants/httpStatus";

export const getAllTickets = (
  _req: Request,
  res: Response
): void => {
  const tickets = ticketService.getAllTickets();

  res.status(HTTP_STATUS.OK).json({
    success: true,
    data: tickets,
  });
};