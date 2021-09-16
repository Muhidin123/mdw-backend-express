import express from "express";
import { testEnvironmentVariable } from "../settings";

const indexRouter = express.Router();

indexRouter.get("/", (_req, res) =>
  res.status(200).json({ message: testEnvironmentVariable })
);

export default indexRouter;
