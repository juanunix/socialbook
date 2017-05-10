const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')

const accountController = require('./controllers/account');
const userController = require('./controllers/user');
const homeController = require('./controllers/home');
const messageController = require('./controllers/message');
const postController = require('./controllers/post');
const fileController = require('./controllers/file');

const errorMiddleware = require('./middlewares/error-middleware');
const authMiddleware = require('./middlewares/auth-middleware');

const PORT = process.env.PORT || 5000;

const app = express();

app.get('/image/:id', fileController.getFile);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser('Secure Key'))

app.use('', express.static('client'));

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');

app.engine('jsx', require('express-react-views').createEngine());

app.use(authMiddleware);

app.get('/login', accountController.getLogin);
app.post('/login', accountController.postLogin);
app.get('/signup', accountController.getSignup);
app.post('/signup', accountController.postSignup);
app.get('/verify', accountController.getVerify);
app.post('/verify', accountController.postVerify);
app.get('/forgot', accountController.getForgot);
app.get('/account/settings', accountController.getAccount);
app.get('/reset/:token', accountController.getReset);
app.get('/signout', accountController.getSignout);

app.get('/', homeController.index);
app.get('/requests', homeController.getFriendRequests);

app.get('/user/:username', userController.getUser);
app.get('/user/:username/friends', userController.getFriends);
app.get('/users', userController.getSearchResults);
app.get('/users/:query', userController.getSearchResults);

app.get('/messages/:id', messageController.getUserChat);
app.get('/messages', messageController.getMessagesList);

app.get('/post/:id', postController.getPost);

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
});
