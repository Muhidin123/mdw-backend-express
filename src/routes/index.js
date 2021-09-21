import express from "express";
import { indexPage, allPages, testPages } from "../controllers";

const indexRouter = express.Router();

indexRouter.get("/", indexPage);
indexRouter.get("/pages", allPages);
indexRouter.get("/testPages", testPages);

export default indexRouter;
