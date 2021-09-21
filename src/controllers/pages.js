import { restart } from "nodemon";
import Model from "../models/model";
import { testEnvironmentVariable } from "../settings";

export const indexPage = (_req, res) =>
  res.status(200).json({ message: testEnvironmentVariable });

const pagesModel = new Model("pages");
export const allPages = async (_req, res) => {
  try {
    const data = await pagesModel.select("label, name");
    res.status(200).json({ pages: data.rows });
  } catch (err) {
    res.status(200).json({ pages: err.stack });
  }
};

const dataModel = new Model("data");
export const testPages = async (_req, res) => {
  try {
    let data = [];
    const sqlReturn = await dataModel.combinePages();
    for (let i = 0; i < sqlReturn.rows.length; i++) {
      const rows = sqlReturn.rows[i];
      const obj = {
        id: rows.id,
        page_id: rows.page_id,
        title: rows.title,
        content: rows.content,
        created_at: rows.created_at,
        updated_at: rows.updated_at,
        page: {
          id: rows.id,
          label: rows.label,
          name: rows.name,
          created_at: rows.createdat,
          updated_at: rows.updatedat,
        },
      };
      data.push(obj);
    }

    res.status(200).json({ success: true, data });
  } catch (err) {
    res.status(200).json({ pages: err.stack });
  }
};
