const fs = require('fs');

const fileQueries = require('./file');
const userQueries = require('./user');
const userTokenQueries = require('./user_token');
const initDatabase = require('./init');

async function testDatabase() {
  try {
    await initDatabase();
    await userDatabase();
    await userTokenDatabase();
    await fileDatabase();
    process.exit();
  } catch(e) {
    console.error(e);
  }
}

async function userDatabase() {
  const { id, verify_code } = await userQueries.signup(
    'priyanshujindal1995@gmail.com',
    'Priyanshu Jindal',
    'prijindal',
    '123456'
  )
  // console.log(id, verify_code)
  const isVerified = await userQueries.verify(
    id,
    verify_code
  );
  // console.log(isVerified)
  const userId = await userQueries.login(
    'prijindal',
    '123456'
  );
  // console.log(userId)
  const newCode = await userQueries.forgotPassword(userId);
  // console.log(newCode)
  const isValidCode = await userQueries.verify(
    userId,
    newCode
  )
  // console.log(isValidCode)
  await userQueries.changePassword(
    userId,
    '654321'
  )
  // const file = fs.readFileSync('/home/prijindal/Downloads/10034872.png');
  // await userQueries.uploadAvatar(userId, file);
}

async function userTokenDatabase() {
  const { token, secret } = await userTokenQueries.newToken(1);
  // console.log(token, secret);
  const userId = await userTokenQueries.verifyToken(token, secret);
  // console.log(userId)
}

async function fileDatabase() {
  const file = fs.readFileSync('/home/prijindal/Downloads/10034872.png');
  // console.dir(file)
  const id = await fileQueries.insertFile(file);
  const content = await fileQueries.getFile(id);
  // console.log(content.toString('base64'));
}

testDatabase();
