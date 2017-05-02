const postQueries = require('../models/post');

/**
 * GET /
 * Home page.
 */
exports.index = async (req, res) => {
  if(res.locals.user) {
    let posts = await postQueries.getNewsFeed(res.locals.user.id);
    res.render('home', { posts });
  } else {
    res.render('account/login');
  }
};


/**
 * GET /requests
 * Reset Token page.
 */
exports.getFriendRequests = (req, res) => {
  res.render('requests', {
    friends: [
      {
        id: 1,
        avatar: 'https://api.adorable.io/avatars/48/q',
        name: 'Random Person 1'
      }
    ]
  });
}
