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
  res.render('home');
})

app.get('/friends', (req, res) => {
  res.render('friends');
})

app.get('/forgot', (req, res) => {
  res.render('forgot');
})

app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
})
