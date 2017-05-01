const pg = require('pg');
// const Promise = require('bluebird');

const config = process.env.DATABASE_URL || {
  host     : 'localhost',
  user     : 'socialbook',
  password : 'socialbook',
  database : 'socialbook',
  max: 20,
}

const pool = new pg.Pool(config);

module.exports = pool;
