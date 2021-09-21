import express from "express";
import { mdwPages } from "../controllers";

const indexRouter = express.Router();

indexRouter.get("/content/:page", mdwPages);

export default indexRouter;
