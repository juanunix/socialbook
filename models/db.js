const mysql = require('mysql');
const Promise = require('bluebird');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'socialbook',
  password : 'socialbook',
  database : 'socialbook'
});

Promise.promisifyAll(connection, {
  multiArgs: true,
});

module.exports = connection;
