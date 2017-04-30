const express = require('express');

const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');

app.use('', express.static('client'));

app.engine('jsx', require('express-react-views').createEngine());

const PORT = process.env.PORT || 3000;

app.get('/login', (req, res) => {
  res.render('login');
})

app.get('/home', (req, res) => {
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
  res.render('home', { posts });
})

app.get('/friends', (req, res) => {
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
  res.render('friends', { friends });
})

app.get('/forgot', (req, res) => {
  res.render('forgot');
})

app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
})
