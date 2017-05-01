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
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(100) NOT NULL,
    avatar_id INT,
    verify_code VARCHAR(32),
    verified BOOLEAN DEFAULT false,
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
  const [results] = await db.queryAsync(
    `
      INSERT INTO ${TABLE_NAME}
      (email,name,username,password,verify_code)
      VALUES(?,?,?,?,?);
    `,
    [email, name, username, password, verify_code]
  )
  return {
    id: results.insertId,
    verify_code
  }
}

exports.login = async (username, password) => {
  const [results] = await db.queryAsync(
    `
      SELECT id, password,verified FROM ${TABLE_NAME}
      WHERE username=?
      LIMIT 1
    `,
    [username]
  )
  if (results.length === 0) {
    throw new Error('No user found');
  }
  if(!results[0].verified) {
    throw new Error('User is not verified');
  }
  const isValidPassword = await compare(password, results[0].password);
  if (!isValidPassword) {
    throw new Error('Invalid password');
  } else {
    return results[0].id
  }
  return null;
}

exports.verify = async (id, code) => {
  const [results] = await db.queryAsync(
    `
      SELECT verify_code FROM ${TABLE_NAME}
      WHERE id=?
      LIMIT 1
    `,
    [id]
  );
  if (results.length === 0) {
    throw new Error('No Field found');
  }
  const { verify_code } = results[0];
  const isValid = verify_code === code;
  if (!isValid) {
    return false;
  }
  await db.queryAsync(
    `
      UPDATE ${TABLE_NAME}
      SET verified = true, verify_code=null
      WHERE id=?
    `,
    [id]
  )
  return true;
}

exports.forgotPassword = async (id) => {
  const verify_code = crypto.randomBytes(32)
        .toString('hex')
        .slice(0, 32);
  const [results] = await db.queryAsync(
    `
      UPDATE ${TABLE_NAME}
      SET verify_code=?
      WHERE id=?
      LIMIT 1
    `,
    [verify_code, id]
  )
  if(results.affectedRows === 0) {
    throw new Error('User not found');
  }
  return verify_code;
}

exports.changePassword = async (id, password) => {
  password = await encrypt(password);
  return await db.queryAsync(
    `
      UPDATE ${TABLE_NAME}
      SET password=?
      WHERE id=?
      LIMIT 1
    `,
    [password, id]
  );
}

exports.uploadAvatar = async (id, content) => {
  let avatar_id = await fileQueries.insertFile(content);
  return await db.queryAsync(
    `
      UPDATE ${TABLE_NAME}
      set avatar_id=?
      WHERE id=?
      LIMIT 1
    `,
    [avatar_id, id]
  );
  return avatar_id;
}
