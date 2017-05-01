const db = require('./db');
const fileQueries = require('./file');
const userQueries = require('./user');
const userTokenQueries = require('./user_token');
const postQueries = require('./post');

async function clearDatabase() {
  try {
    await Promise.all([
      db.query(postQueries.dropTable),
      db.query(userTokenQueries.dropTable)
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
      db.query(userTokenQueries.createTable),
      db.query(postQueries.createTable)
    ])
  } catch(e) {
    console.error(e);
  }
}

module.exports = initDatabase;
