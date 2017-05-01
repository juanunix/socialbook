const db = require('./db');
const friendQueries = require('./friend');
const TABLE_NAME = 'Messages';

exports.dropTable = `
  DROP TABLE IF EXISTS ${TABLE_NAME};
`

exports.createTable = `
  CREATE TABLE IF NOT EXISTS ${TABLE_NAME} (
    id SERIAL NOT NULL,
    sender_id INT NOT NULL,
    receiver_id INT NOT NULL,
    message TEXT,
    created_at TIMESTAMP DEFAULT LOCALTIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (sender_id) REFERENCES Users(id),
    FOREIGN KEY (receiver_id) REFERENCES Users(id)
  );
`

exports.sendMessage = async (sender_id, receiver_id, message) => {
  const { rows } = await db.query(
    `
      INSERT INTO ${TABLE_NAME}
      (sender_id, receiver_id, message)
      VALUES($1,$2,$3)
      RETURNING id;
    `,
    [sender_id, receiver_id, message]
  )
  if(rows.length === 0) {
    throw new Error('Unknown error occurred');
  }
  return rows[0].id;
}

exports.getMessages = getMessages = async (first_id, second_id, options = {limit: 100}) => {
  const { rows } = await db.query(
    `
      SELECT id, message,sender_id,receiver_id
      FROM ${TABLE_NAME}
      WHERE
      (sender_id=$1 AND receiver_id=$2) OR
      (sender_id=$2 AND receiver_id=$1)
      ORDER BY created_at DESC
      LIMIT $3;
    `,
    [first_id, second_id, options.limit]
  )
  return rows;
}

exports.getFriendsWithMessages = async (user_id) => {
  const friendList = await friendQueries.getFriendsList(user_id);
  const promise_lists = [];
  friendList.forEach(friend => {
    promise_lists.push(getMessages(user_id, friend, {limit:1}));
  })
  let rows = await Promise.all(promise_lists)
  rows = rows.map(row => {
    return {
      user_id: row[0].sender_id !== user_id ? row[0].sender_id : row[0].receiver_id,
      messages: row.map(({ id, message }) => ({ id, message }))
    }
  })
  return rows;
}
