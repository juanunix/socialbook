const db = require('./db');
const TABLE_NAME = 'Files';

exports.dropTable = `
  DROP TABLE IF EXISTS ${TABLE_NAME};
`

exports.createTable = `
  CREATE TABLE IF NOT EXISTS ${TABLE_NAME} (
    id INT NOT NULL AUTO_INCREMENT,
    content BLOB NOT NULL,
    PRIMARY KEY (id)
  );
`

exports.insertFile = async (content) => {
  let [results] = await db.queryAsync(
    `
      INSERT INTO ${TABLE_NAME}
      (content)
      VALUES(?)
    `,
    [content]
  )
  return results.insertId;
}

exports.getFile = async (id) => {
  let [results] = await db.queryAsync(
    `
      SELECT content FROM ${TABLE_NAME}
      WHERE id=?
      LIMIT 1
    `,
    [id]
  )
  if (results.length === 0) {
    throw new Error('No file found');
  }
  return results[0].content
}
