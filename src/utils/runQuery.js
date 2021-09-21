import {
  createContacts,
  createSinglePageTable,
  createTables,
  dropTables,
  insertIntoContacts,
  insertIntoSinglePageTables,
  insertIntoTables,
} from "./queryFunctions";

(async () => {
  // await createTables();
  // await insertIntoTables();
  // await createSinglePageTable();
  // await insertIntoSinglePageTables();
  // dropTables();
  // createContacts();
  insertIntoContacts();
})();
