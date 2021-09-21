export const createPagesTable = `
CREATE TABLE IF NOT EXISTS data (
  id SERIAL PRIMARY KEY,
  title VARCHAR DEFAULT '',
  content VARCHAR NOT NULL,
  page_id INT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )
  `;

export const insertPages = `
INSERT INTO data(title, content, page_id)
VALUES ('Well Howdy', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do dos eiusmod tempor incididunt ut labore et trace dolore magna aliqua. Proin sagittis nisl rhoncus mattis rhoncus. At augue eget arcu dictum varius duis at consectetur lorem.', 2)

`;

export const dropPagesTable = `DELETE FROM data WHERE id=1`;

export const createPages = `
CREATE TABLE IF NOT EXISTS pages (
  id SERIAL PRIMARY KEY,
  label VARCHAR,
  name VARCHAR,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
`;

export const insertIntoSinglePagesTable = `
INSERT INTO pages(label, name)
VALUES ('contact', 'Contact')
`;

export const dropSinglePagesTable = "DROP TABLE pages";
