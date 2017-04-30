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
 * GET /user/:id
 * Home page.
 */
exports.getUser = (req, res) => {
  res.render('user')
}

/**
 * GET /user/:id/friends
 * Home page.
 */
 exports.getFriends = (req, res) => {
   res.render('friends', { friends });
 }
