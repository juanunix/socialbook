const express = require('express');
const bodyParser = require('body-parser');

const accountController = require('./controllers/account');
const userController = require('./controllers/user');
const homeController = require('./controllers/home');
const messageController = require('./controllers/message');
const postController = require('./controllers/post');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use('', express.static('client'));

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');

app.engine('jsx', require('express-react-views').createEngine());

app.get('/login', accountController.getLogin);
app.post('/login', accountController.postLogin);
app.get('/signup', accountController.getSignup);
app.get('/forgot', accountController.getForgot);
app.get('/account/settings', accountController.getAccount);
app.get('/reset/:token', accountController.getReset);

app.get('/', homeController.index);
app.get('/requests', homeController.getFriendRequests);

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
