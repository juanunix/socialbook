const bcrypt = require('bcrypt');
const crypto = require('crypto');
const db = require('./db');
const fileQueries = require('./file');
const TABLE_NAME = 'Users';

exports.dropTable = `
  DROP TABLE IF EXISTS ${TABLE_NAME};
`

exports.createTable = `
  CREATE TABLE IF NOT EXISTS ${TABLE_NAME} (
    id SERIAL NOT NULL,
    username VARCHAR(50) NOT NULL UNIQUE,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    avatar_id INT,
    verify_code VARCHAR(32),
    verified BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT LOCALTIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (avatar_id) REFERENCES Files(id)
  );
`

const encrypt = async (original) => {
  return await bcrypt.hash(original, 10);
}

const compare = async (original, hashed) => {
  return await bcrypt.compare(original, hashed);
}

exports.signup = async (email, name, username, password) => {
  const verify_code = crypto.randomBytes(32)
        .toString('hex')
        .slice(0, 32);
  password = await encrypt(password);
  const { rows } = await db.query(
    `
      INSERT INTO ${TABLE_NAME}
      (email,name,username,password,verify_code)
      VALUES($1,$2,$3,$4,$5)
      RETURNING id;
    `,
    [email, name, username, password, verify_code]
  )
  return {
    id: rows[0].id,
    verify_code
  }
}

exports.login = async (username, password) => {
  const { rows } = await db.query(
    `
      SELECT id, password,verified FROM ${TABLE_NAME}
      WHERE username=$1
      LIMIT 1
    `,
    [username]
  )
  if (rows.length === 0) {
    throw new Error('No user found');
  }
  if(!rows[0].verified) {
    throw new Error('User is not verified');
  }
  const isValidPassword = await compare(password, rows[0].password);
  if (!isValidPassword) {
    throw new Error('Invalid password');
  } else {
    return rows[0].id
  }
  return null;
}

exports.verify = async (id, code) => {
  const { rows } = await db.query(
    `
      SELECT verify_code FROM ${TABLE_NAME}
      WHERE id = $1
      LIMIT 1;
    `,
    [id]
  );
  if (rows.length === 0) {
    throw new Error('No Field found');
  }
  const { verify_code } = rows[0];
  const isValid = verify_code === code;
  if (!isValid) {
    return false;
  }
  await db.query(
    `
      UPDATE ${TABLE_NAME}
      SET verified = true, verify_code=null
      WHERE id=$1
    `,
    [id]
  )
  return true;
}

exports.forgotPassword = async (id) => {
  const verify_code = crypto.randomBytes(32)
        .toString('hex')
        .slice(0, 32);
  const results = await db.query(
    `
      UPDATE ${TABLE_NAME}
      SET verify_code=$1
      WHERE id=$2;
    `,
    [verify_code, id]
  )
  if(results.rowCount === 0) {
    throw new Error('User not found');
  }
  return verify_code;
}

exports.changePassword = async (id, password) => {
  password = await encrypt(password);
  return await db.query(
    `
      UPDATE ${TABLE_NAME}
      SET password=$1
      WHERE id=$2;
    `,
    [password, id]
  );
}

exports.uploadAvatar = async (id, content) => {
  let avatar_id = await fileQueries.insertFile(content);
  return await db.query(
    `
      UPDATE ${TABLE_NAME}
      set avatar_id=$1
      WHERE id=$2
    `,
    [avatar_id, id]
  );
}

exports.getUserInfo = async (id) => {
  let { rows } = await db.query(
    `
      SELECT id,username,name,avatar_id
      FROM ${TABLE_NAME}
      WHERE id=$1
      LIMIT 1;
    `,
    [id]
  )
  if(rows.length === 0) {
    throw new Error('User not found');
  }
  return rows[0];
}
