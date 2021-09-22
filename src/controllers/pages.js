import { makeObj } from "../helpers/helpers";
import Model from "../models/model";

const dataModel = new Model("pages");
const contactsModel = new Model("contacts");

export const addNewContact = async (req, res) => {
  const { first_name, last_name, email, title, message } = req.body;
  const columns = "first_name, last_name, email, title, message";
  const values = `'${first_name}', '${last_name}', '${email}', '${title}', '${message}'`;
  try {
    const data = await contactsModel.insertWithReturn(columns, values);
    res
      .status(200)
      .json({ data: `Successfully added new Contact ${data.rows.first_name}` });
  } catch (err) {
    res.status(err.status).json({ contact: err.stack });
  }
};
export const mdwPages = async (req, res) => {
  try {
    let data = [];
    const sqlReturn = await dataModel.pages(req.params.page);
    for (let i = 0; i < sqlReturn.rows.length; i++) {
      const rows = sqlReturn.rows[i];
      data.push(makeObj(rows));
    }
    res.status(200).json({ success: true, data });
  } catch (err) {
    res.status(err.status).json({ pages: err.stack });
  }
};
