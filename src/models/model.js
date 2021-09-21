import { pool } from "./pool";

class Model {
  constructor(table) {
    this.pool = pool;
    this.table = table;
    this.pool.on(
      "error",
      (err, client) => `Error, ${err}, on idle client${client}`
    );
  }

  async select(columns, clause) {
    let query = `SELECT ${columns} FROM ${this.table}`;
    if (clause) query += clause;
    return this.pool.query(query);
  }

  async combinePages(_columns, clause) {
    let query = `SELECT *, pages.created_at as createdAt, pages.updated_at as updatedAt
    FROM ${this.table}
    JOIN pages
    ON data.page_id = pages.id;`;
    if (clause) query += clause;
    return this.pool.query(query);
  }
}

export default Model;
