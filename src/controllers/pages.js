import Model from "../models/model";
import { testEnvironmentVariable } from "../settings";

export const indexPage = (_req, res) =>
  res.status(200).json({ message: testEnvironmentVariable });

const pagesModel = new Model("pages");
export const allPages = async (_req, res) => {
  try {
    const data = await pagesModel.select("title, content");
    res.status(200).json({ pages: data.rows });
  } catch (err) {
    res.status(200).json({ pages: err.stack });
  }
};
