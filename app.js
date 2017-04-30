const express = require('express');

const authController = require('./controllers/auth');
const userController = require('./controllers/user');
const homeController = require('./controllers/home');
const messageController = require('./controllers/message');
const postController = require('./controllers/post');

const PORT = process.env.PORT || 5000;

const app = express();

app.use('', express.static('client'));

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');

app.engine('jsx', require('express-react-views').createEngine());


app.get('/login', authController.getLogin);
app.get('/signup', authController.getSignup);
app.get('/forgot', authController.getForgot);
app.get('/account', authController.getAccount);
app.get('/reset/:token', authController.getReset);

app.get('/', homeController.index);

app.get('/user/:id', userController.getUser);
app.get('/user/:id/friends', userController.getFriends);
app.get('/users', userController.getSearchResults);
app.get('/users/:query', userController.getSearchResults);

app.get('/messages/:id', messageController.getUserChat);
app.get('/messages', messageController.getMessagesList);

app.get('/post/:id', postController.getPost);


app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
});
