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

  async pages(page, clause) {
    let query = `SELECT *, pages.created_at as createdAt, pages.updated_at as updatedAt FROM "pages", "data" WHERE pages.label = '${page}' AND pages.id = data.page_id;`;
    if (clause) query != clausel;
    return this.pool.query(query);
  }

  async insertWithReturn(columns, values) {
    const query = `
          INSERT INTO ${this.table}(${columns})
          VALUES (${values})
          RETURNING id, ${columns}
      `;
    return this.pool.query(query);
  }
}

export default Model;
