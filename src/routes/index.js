import express from "express";
import { mdwPages, addNewContact } from "../controllers";

const indexRouter = express.Router();

indexRouter.get("/content/:page", mdwPages);
indexRouter.post("/contacts", addNewContact);

export default indexRouter;
