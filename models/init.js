const db = require('./db');
const fileQueries = require('./file');
const userQueries = require('./user');
const userTokenQueries = require('./user_token');

async function clearDatabase() {
  try {
    await db.queryAsync(userTokenQueries.dropTable);
    await db.queryAsync(userQueries.dropTable);
    await db.queryAsync(fileQueries.dropTable);
  } catch(e) {
    console.error(e);
  }
}

async function initDatabase() {
  try {
    await clearDatabase();
    await db.queryAsync(fileQueries.createTable);
    await db.queryAsync(userQueries.createTable);
    await db.queryAsync(userTokenQueries.createTable);
  } catch(e) {
    console.error(e);
  }
}

module.exports = initDatabase;
