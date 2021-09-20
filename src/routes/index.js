  import express from "express";
import { indexPage, allPages } from "../controllers";

const indexRouter = express.Router();

indexRouter.get("/", indexPage);
indexRouter.get("/pages", allPages);

export default indexRouter;
