const db = require('./db');
const TABLE_NAME = 'Files';

exports.TABLE_NAME = TABLE_NAME;

exports.dropTable = `
  DROP TABLE IF EXISTS ${TABLE_NAME};
`

exports.createTable = `
  CREATE TABLE IF NOT EXISTS ${TABLE_NAME} (
    id SERIAL NOT NULL,
    content BYTEA NOT NULL,
    created_at TIMESTAMP DEFAULT LOCALTIMESTAMP,
    PRIMARY KEY (id)
  );
`

exports.insertFile = async (content) => {
  let { rows } = await db.query(
    `
      INSERT INTO ${TABLE_NAME}
      (content)
      VALUES($1)
      RETURNING id;
    `,
    [content]
  )
  return rows[0].id;
}

exports.getFile = async (id) => {
  let { rows } = await db.query(
    `
      SELECT content FROM ${TABLE_NAME}
      WHERE id=$1
      LIMIT 1
    `,
    [id]
  )
  if (rows.length === 0) {
    throw new Error('No file found');
  }
  return rows[0].content
}
