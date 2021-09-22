import {
  createContacts,
  createSinglePageTable,
  createTables,
  insertIntoSinglePageTables,
  insertIntoTables,
} from "./queryFunctions";

(async () => {
  await createSinglePageTable();
  await createTables();
  await insertIntoSinglePageTables();
  await insertIntoTables();
  await createContacts();
})();
