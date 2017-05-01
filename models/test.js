const fileQueries = require('./file');
const userQueries = require('./user');
const userTokenQueries = require('./user_token');
const initDatabase = require('./init');

async function testDatabase() {
  try {
    await initDatabase();
    await userDatabase();
    await userTokenDatabase();
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
  const isVerified = await userQueries.verify(
    id,
    verify_code
  )
  const userId = await userQueries.login(
    'prijindal',
    '123456'
  );
  const newCode = await userQueries.forgotPassword(userId);
  const isValidCode = await userQueries.verify(
    userId,
    newCode
  )
  await userQueries.changePassword(
    userId,
    '654321'
  )
}

async function userTokenDatabase() {
  const { token, secret } = await userTokenQueries.newToken(1);
  const isValid = await userTokenQueries.verifyToken(token, secret);
  console.log(isValid)
}

testDatabase();
