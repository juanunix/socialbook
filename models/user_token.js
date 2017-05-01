const bcrypt = require('bcrypt');
const crypto = require('crypto');
const db = require('./db');
const TABLE_NAME = 'User_Tokens';

exports.dropTable = `
  DROP TABLE IF EXISTS ${TABLE_NAME};
`

exports.createTable = `
  CREATE TABLE IF NOT EXISTS ${TABLE_NAME} (
    token VARCHAR(100) NOT NULL,
    user_id INT NOT NULL,
    secret VARCHAR(100) NOT NULL,
    last_used TIMESTAMP,
    PRIMARY KEY (token),
    FOREIGN KEY (user_id) REFERENCES Users(id)
  );
`

const encrypt = async (original) => {
  return await bcrypt.hash(original, 10);
}

const compare = async (original, hashed) => {
  return await bcrypt.compare(original, hashed);
}

exports.newToken = async (user_id) => {
  const token = crypto.randomBytes(32)
        .toString('hex')
        .slice(0, 32);
  const secret = crypto.randomBytes(64)
              .toString('hex')
              .slice(0, 64);
  const encrypted_secret = await encrypt(secret);
  await db.query(
    `
      INSERT INTO ${TABLE_NAME}
      (token, user_id, secret,last_used)
      VALUES($1,$2,$3, $4);
    `,
    [token, user_id, encrypted_secret, new Date()]
  )
  return {
    token,
    secret,
  };
}

exports.verifyToken = async (token, secret) => {
  if(!token || !secret) return false;
  const { rows } = await db.query(
    `
      SELECT user_id, secret FROM ${TABLE_NAME}
      WHERE token=$1
      AND last_used>$2
      LIMIT 1;
    `,
    [token,new Date(Date.now() - 1000 * 60 * 60 * 24 * 30)]
  );
  if(rows.length === 0) {
    return false;
  }
  var encrypted_secret = rows[0].secret;
  const isSecretValid = await compare(secret, encrypted_secret);
  if (!isSecretValid) {
    return false;
  }
  await db.query(
    `
      UPDATE ${TABLE_NAME}
      SET last_used=$1
      WHERE token=$2;
    `,
    [new Date(), token]
  )
  return rows[0].user_id;
}
