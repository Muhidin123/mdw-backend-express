export const createPagesTable = `
CREATE TABLE IF NOT EXISTS pages (
  id SERIAL PRIMARY KEY,
  title VARCHAR DEFAULT '',
  content VARCHAR NOT NULL
  )
  `;

export const insertPages = `
INSERT INTO pages(title, content)
VALUES ('some page', 'some page')
`;

export const dropPagesTable = "DROP TABLE pages";

// export const createMessageTable = `
// DROP TABLE IF EXISTS messages;
// CREATE TABLE IF NOT EXISTS messages (
//   id SERIAL PRIMARY KEY,
//   name VARCHAR DEFAULT '',
//   message VARCHAR NOT NULL
//   )
//   `;

// export const insertMessages = `
// INSERT INTO messages(name, message)
// VALUES ('chidimo', 'first message'),
//       ('orji', 'second message')
// `;

// export const dropMessagesTable = "DROP TABLE messages";
