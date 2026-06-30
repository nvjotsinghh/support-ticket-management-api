import express from "express";
import morgan from "morgan";

import { HTTP_STATUS } from "./constants/httpStatus";

const app = express();

app.use(express.json());

app.use(morgan("dev"));

app.get("/health", (_req, res) => {
  return res.status(HTTP_STATUS.OK).json({
    success: true,
    statusCode: HTTP_STATUS.OK,
    message: "Support Ticket API is running",
    timestamp: new Date().toISOString(),
  });
});

export default app;