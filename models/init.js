const db = require('./db');
const fileQueries = require('./file');
const userQueries = require('./user');
const userTokenQueries = require('./user_token');
const postQueries = require('./post');
const commentQueries = require('./comment');
const friendQueries = require('./friend');
const messageQueries = require('./message');

async function clearDatabase() {
  try {
    await db.query(commentQueries.dropTable);
    await Promise.all([
      db.query(postQueries.dropTable),
      db.query(userTokenQueries.dropTable),
      db.query(friendQueries.dropTable),
      db.query(messageQueries.dropTable),
    ]);
    await db.query(userQueries.dropTable);
    await db.query(fileQueries.dropTable);
  } catch(e) {
    console.error(e);
  }
}

async function initDatabase() {
  try {
    await clearDatabase();
    await db.query(fileQueries.createTable);
    await db.query(userQueries.createTable);
    await Promise.all([
      db.query(messageQueries.createTable),
      db.query(friendQueries.createTable),
      db.query(userTokenQueries.createTable),
      db.query(postQueries.createTable)
    ])
    await db.query(commentQueries.createTable);
  } catch(e) {
    console.error(e);
  }
}

module.exports = initDatabase;
