import { pool } from "../models/pool";
import { insertPages, createPagesTable, dropPagesTable } from "./queries";

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
