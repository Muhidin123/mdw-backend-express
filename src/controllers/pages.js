import { makeObj } from "../helpers/helpers";
import Model from "../models/model";

const dataModel = new Model("data");

export const mdwPages = async (req, res) => {
  try {
    let data = [];
    const sqlReturn = await dataModel.pages(req.params.page);
    console.log(sqlReturn.rows);
    for (let i = 0; i < sqlReturn.rows.length; i++) {
      const rows = sqlReturn.rows[i];
      data.push(makeObj(rows));
    }
    res.status(200).json({ success: true, data });
  } catch (err) {
    res.status(err.status).json({ pages: err.stack });
  }
};
