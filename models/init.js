const db = require('./db');
const fileQueries = require('./file');
const userQueries = require('./user');
const userTokenQueries = require('./user_token');

async function clearDatabase() {
  try {
    await db.query(userTokenQueries.dropTable);
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
    await db.query(userTokenQueries.createTable);
  } catch(e) {
    console.error(e);
  }
}

module.exports = initDatabase;
