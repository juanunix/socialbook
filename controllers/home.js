const posts = [
  {
    id: 1,
    user: {
      avatar: 'https://api.adorable.io/avatars/48/abott@adorable.io.png',
      name: 'Priyanshu Jindal',
    },
    created_at: '5 hours ago',
    content:{
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in',
    },
  },
  {
    id: 2,
    user: {
      avatar: 'https://api.adorable.io/avatars/48/abott@adorable.png',
      name: 'Random User',
    },
    created_at: '9 Hours ago',
    content: {
      image: 'http://lorempixel.com/600/400/'
    }
  },
  {
    id: 3,
    user: {
      avatar: 'https://api.adorable.io/avatars/48/xwxwxwxwxw',
      name: 'Another user'
    },
    created_at: 'Yesterday at 22:00',
    content: {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in',
      image: 'http://lorempixel.com/600/600/'
    }
  }
]

/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  if(req.user) {
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
