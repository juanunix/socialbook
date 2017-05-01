const db = require('./db');
const TABLE_NAME = 'Comments';

exports.dropTable = `
  DROP TABLE IF EXISTS ${TABLE_NAME};
`

exports.createTable = `
  CREATE TABLE IF NOT EXISTS ${TABLE_NAME} (
    id SERIAL NOT NULL,
    user_id INT NOT NULL,
    post_id INT NOT NULL,
    content TEXT,
    created_at TIMESTAMP DEFAULT LOCALTIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES Users(id),
    FOREIGN KEY (post_id) REFERENCES Posts(id)
  );
`

exports.createComment = async (user_id, post_id, content) => {
  const { rows } = await db.query(
    `
      INSERT INTO ${TABLE_NAME}
      (user_id, post_id, content)
      VALUES($1,$2,$3)
      RETURNING id;
    `,
    [user_id,post_id,content]
  )
  if(rows.length === 0) {
    throw new Error('Some Error occurred')
  }
  return rows[0].id;
}

exports.getComments = async (post_id) => {
  const { rows } = await db.query(
    `
      SELECT id,user_id,content,created_at
      FROM ${TABLE_NAME}
      WHERE post_id=$1
      LIMIT 30;
    `,
    [post_id]
  )
  return rows;
}
