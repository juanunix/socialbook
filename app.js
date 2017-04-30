const express = require('express');

const authController = require('./controllers/auth');
const userController = require('./controllers/user');
const homeController = require('./controllers/home');

const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');

app.use('', express.static('client'));

app.engine('jsx', require('express-react-views').createEngine());

const PORT = process.env.PORT || 3000;

app.get('/login', authController.getLogin);
app.get('/forgot', authController.getForgot);

app.get('/', homeController.index);

app.get('/user/:id/friends', userController.getFriends);

app.get('/message', (req, res) => {
  res.render('message');
})

app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
});
