export const createPagesTable = `
CREATE TABLE IF NOT EXISTS data (
  id SERIAL PRIMARY KEY,
  title VARCHAR DEFAULT '',
  content VARCHAR NOT NULL,
  page_id INT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (page_id)
  REFERENCES pages(id)
  )
  `;

export const insertPages = `
INSERT INTO data(title, content, page_id)
VALUES ('10/4', 'Integer accumsan molestie nisl, id faucibus urna accumsan quis. Proin vulputate, mauris semper maximus.', 1),
('Sweet Tators', 'Morbi eget magna nunc. Aenean tristique justo enim bibendum egestas. Integer accumsan imperdiet purus', 1),
('Dagnabbit', 'Aliquam erat volutpat. Aenean ultrices in odio id tempor. Phasellus placerat eros ac vestibulum.', 1),
('Well Howdy', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do dos eiusmod tempor incididunt ut labore et trace dolore magna aliqua. Proin sagittis nisl rhoncus mattis rhoncus. At augue eget arcu dictum varius duis at consectetur lorem.', 2)
`;

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
VALUES ('home', 'Home'),
        ('contact', 'Contact')
`;


export const createContactsTable = `
CREATE TABLE IF NOT EXISTS contacts (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR,
  last_name VARCHAR,
  email VARCHAR,
  title VARCHAR,
  message VARCHAR
)
`;

export const addContact = `
INSERT INTO contacts(first_name, last_name, email, title, message)
VALUES('Muhidin', 'Hukic', 'mike@gmail.com', 'SE', 'MESSAGE')
`;
