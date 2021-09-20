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
VALUES ('Integer accumsan molestie nisl, id faucibus urna accumsan quis. Proin vulputate, mauris semper maximus.', '10/4', 1),
('Morbi eget magna nunc. Aenean tristique justo enim bibendum egestas. Integer accumsan imperdiet purus.', 'Sweet Tators', 1),
('Dagnabbit', 'Aliquam erat volutpat. Aenean ultrices in odio id tempor. Phasellus placerat eros ac vestibulum.', 1)

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
