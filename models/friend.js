const db = require('./db');
const userQueries = require('./user');
const TABLE_NAME = 'Friends';

exports.dropTable = `
  DROP TABLE IF EXISTS ${TABLE_NAME};
`

exports.createTable = `
  CREATE TABLE IF NOT EXISTS ${TABLE_NAME} (
    id SERIAL NOT NULL,
    sender_id INT NOT NULL,
    receiver_id INT NOT NULL,
    approved BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT LOCALTIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (sender_id) REFERENCES Users(id),
    FOREIGN KEY (receiver_id) REFERENCES Users(id)
  );
`

exports.addRequest = async (sender_id, receiver_id) => {
  const { rows } = await db.query(
    `
      INSERT INTO ${TABLE_NAME}
      (sender_id, receiver_id)
      VALUES($1, $2)
      RETURNING id;
    `,
    [sender_id, receiver_id]
  )
  if(rows.length === 0) {
    throw new Error('Some error occurred');
  }
  return rows[0].id;
}

exports.getFriendRequests = async (user_id) => {
  const { rows } = await db.query(
    `
      SELECT id, sender_id
      FROM ${TABLE_NAME}
      WHERE receiver_id=$1
      AND approved=FALSE
      LIMIT 30;
    `,
    [user_id]
  )
  return rows;
}

exports.approveRequest = async (id) => {
  const results = await db.query(
    `
      UPDATE ${TABLE_NAME}
      SET approved=TRUE
      WHERE id=$1;
    `,
    [id]
  )
  return results.rowCount
}

exports.checkFriends = async (first_id, second_id) => {
  const { rows } = await db.query(
    `
      SELECT approved,created_at
      FROM ${TABLE_NAME}
      WHERE
      (sender_id=$1 AND receiver_id=$2) OR
      (sender_id=$2 AND receiver_id=$1)
      LIMIT 1;
    `,
    [first_id, second_id]
  )
  if(rows.length === 0) {
    return false;
  }
  return rows[0];
}

exports.getFriendsList = async(user_id) => {
  const { rows } = await db.query(
    `
      SELECT id,sender_id,receiver_id
      FROM ${TABLE_NAME}
      WHERE
      (sender_id=$1 OR receiver_id=$1) AND
      approved=TRUE
    `,
    [user_id]
  )
  const users_list = [];
  rows.forEach(row => {
    let users = [row.sender_id, row.receiver_id];
    for(var i = 0;i < users.length;i+=1) {
      if(
        (users[i] !== user_id) &&
        !(users[i] in users_list)
      ) {
        users_list.push(users[i]);
      }
    }
  })
  return users_list;
}
