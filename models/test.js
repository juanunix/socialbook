const fs = require('fs');

const fileQueries = require('./file');
const userQueries = require('./user');
const userTokenQueries = require('./user_token');
const postQueries = require('./post');
const commentQueries = require('./comment');
const friendQueries = require('./friend');
const messageQueries = require('./message');
const initDatabase = require('./init');

async function testDatabase() {
  try {
    await initDatabase();
    await userDatabase();
    await userTokenDatabase();
    await fileDatabase();
    await friendDatabase();
    await postDatabase();
    await commentDatabase();
    await messageDatabase();
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
  await userQueries.signup(
    'priyanshu.jindal2014@vit.ac.in',
    'Priyanshu College',
    'priyanshujindal',
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
  const file = fs.readFileSync('/home/prijindal/Downloads/10034872.png');
  await userQueries.uploadAvatar(userId, file);
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

async function friendDatabase() {
  const id = await friendQueries.addRequest(1,2);
  // console.log(id);
  const friendRequests = await friendQueries.getFriendRequests(2);
  // console.log(friendRequests);

  let friendship = await friendQueries.checkFriends(1,2);
  // console.log(friendship);
  await friendQueries.approveRequest(friendRequests[0].id);
  friendship = await friendQueries.checkFriends(1,2);
  // console.log(friendship);

  const friends = await friendQueries.getFriendsList(1);
  // console.log(friends);
}


async function postDatabase() {
  const file = fs.readFileSync('/home/prijindal/Downloads/10034872.png');
  const id = await postQueries.createPost(1, 'Some Content', file);
  const anotherId = await postQueries.createPost(2, 'Some Other Content');
  // console.log(id);
  const { user_id, content, image } = await postQueries.getPost(id);
  // console.log(user_id, content, image);
  let posts = await postQueries.getUserPosts(1);
  // console.log(posts);
  posts = await postQueries.getNewsFeed(1);
  // console.log(posts);
}

async function commentDatabase() {
  const id = await commentQueries.createComment(1,1,'Some comment');
  // console.log(id);
  const comments = await commentQueries.getComments(1);
  // console.log(comments);
}


async function messageDatabase() {
  let id = await messageQueries.sendMessage(1, 2, 'Hello');
  id = await messageQueries.sendMessage(2, 1, 'Hey');
  const messages = await messageQueries.getMessages(1, 2);
  // console.log(messages);
  const friendsWithMessages = await messageQueries.getFriendsWithMessages(1);
  // console.log(friendsWithMessages[0]);
}

testDatabase();
