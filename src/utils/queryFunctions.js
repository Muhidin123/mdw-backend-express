import { pool } from "../models/pool";
import {
  insertPages,
  createPagesTable,
  dropPagesTable,
  insertIntoSinglePagesTable,
  createPages,
  createContactsTable,
  addContact,
} from "./queries";

export const executeQueryArray = async arr =>
  new Promise(resolve => {
    const stop = arr.length;
    arr.forEach(async (q, index) => {
      await pool.query(q);
      if (index + 1 === stop) resolve();
    });
  });

export const dropTables = () => executeQueryArray([dropPagesTable]);
export const createTables = () => executeQueryArray([createPagesTable]);
export const insertIntoTables = () => executeQueryArray([insertPages]);
export const insertIntoSinglePageTables = () =>
  executeQueryArray([insertIntoSinglePagesTable]);
export const createSinglePageTable = () => executeQueryArray([createPages]);
export const createContacts = () => executeQueryArray([createContactsTable]);
export const insertIntoContacts = () => executeQueryArray([addContact]);
