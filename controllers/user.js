const userQueries = require('../models/user');
const friendQueries = require('../models/friend');

const friends = [
  {
    id: 1,
    avatar: 'https://api.adorable.io/avatars/48/q',
    name: 'Random Person 1'
  },
  {
    id: 2,
    avatar: 'https://api.adorable.io/avatars/48/w',
    name: 'Random Person 2'
  },
  {
    id: 3,
    avatar: 'https://api.adorable.io/avatars/48/e',
    name: 'Random Person 3'
  },
]

/**
 * GET /user/:username
 * Home page.
 */
exports.getUser = async (req, res, next) => {
  try {
    const userProfile = await userQueries.getUserProfile(req.params.username);
    var friendship;
    if(res.locals.user && res.locals.user.id !== userProfile.id) {
      friendship = await friendQueries.checkFriends(res.locals.user.id, userProfile.id);
    }
    res.render('user', { user: res.locals.user, profile: userProfile, friendship })
    return;
  } catch(e) {
    next({
      code: 404,
      message: 'User not found',
      path: '404'
    })
  }
}

/**
 * GET /user/:username/friends
 * Home page.
 */
exports.getFriends = (req, res) => {
 res.render('friends', { friends });
}

/**
 * GET /users
 * GET /users/:query
 * Home page.
 */
exports.getSearchResults = (req, res) => {
  res.render('search', {results: friends});
}
