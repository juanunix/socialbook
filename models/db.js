const pg = require('pg');
const url = require('url');

const params = url.parse(process.env.DATABASE_URL || 'postgres://socialbook:socialbook@localhost:5432/socialbook');
const auth = params.auth.split(':');

const config = {
  user: auth[0],
  password: auth[1],
  host: params.hostname,
  port: params.port,
  database: params.pathname.split('/')[1],
  ssl: process.env.DATABASE_URL ? true : false
};

const pool = new pg.Pool(config);

module.exports = pool;
