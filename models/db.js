const pg = require('pg');
// const Promise = require('bluebird');

const pool = new pg.Pool({
  host     : 'localhost',
  user     : 'socialbook',
  password : 'socialbook',
  database : 'socialbook'
});

module.exports = pool;
