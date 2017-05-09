const userQueries = require('../models/user');
const userTokenQueries = require('../models/user_token');
/**
 * GET /login
 * Login page.
 */
exports.getLogin = (req, res) => {
  res.render('account/login');
}

/**
 * POST /login
 * Sign in using username, password.
 */
exports.postLogin = async (req, res, next) => {
  if (!req.body) {
    return next({
      code: 401,
      message: 'Server Error',
      path: 'account/login'
    })
  }
  const { username, password } = req.body;
  if(!username || !password) {
    return next({
      code: 401,
      message: 'Username and password are required',
      path: 'account/login'
    })
  }
  try {
    const id = await userQueries.login(username, password);
    const { token, secret } = await userTokenQueries.newToken(id);
    res.cookie('token', token, { signed: true });
    res.cookie('secret', secret, { signed: true });
    res.redirect('/');
  } catch (e) {
    return next({
      code: 403,
      message: e.message,
      path: 'account/login'
    })
  }
  next();
}

/**
 * GET /signup
 * Login page.
 */
exports.getSignup = (req, res) => {
  res.render('account/signup');
}

exports.postSignup = async (req, res, next) => {
  if (!req.body) {
    return next({
      code: 401,
      message: 'Server Error',
      path: 'account/signup'
    })
  }
  const { username, password, name, email } = req.body;
  if(!username || !password || !name || !email) {
    var missing = null
    if(!password) missing = 'Password';
    if(!username) missing = 'Username';
    if(!name) missing = 'Name';
    if(!email) missing = 'Username';
    return next({
      code: 401,
      message: `${missing} is required`,
      path: 'account/signup'
    })
  }
  try {
    const { id, verify_code } = await userQueries.signup(email, name, username, password);
    // Send veriyf_code to email
    console.log(`Sending ${verify_code} and encrypted ${id} to ${email}`)
    const { token, secret } = await userTokenQueries.newToken(id);
    res.cookie('user_id', id, { signed: true })
    res.redirect(`/verify`);
  } catch (e) {
    console.error(e)
    return next({
      code: 403,
      message: 'Username already exists',
      path: 'account/signup'
    })
  }
  next();
}

exports.getVerify = async (req, res) => {
  const { user_id } = req.signedCookies
  res.clearCookie('user_id')
  if(user_id) {
    const user = await userQueries.getUserInfo(res.locals.user_id);
    res.render('account/verify', { user })
  } else {
    res.render('account/verify')
  }
}

/**
 * GET /account/settings
 * Account Settings page.
 */
exports.getAccount = (req, res) => {
  res.render('account/settings');
}


/**
 * GET /forgot
 * Forgot page.
 */
exports.getForgot = (req, res) => {
  res.render('account/forgot');
}

/**
 * GET /reset/:token
 * Reset Token page.
 */
exports.getReset = (req,res) => {
  res.render('account/reset');
}

/**
 * GET /signout
 * Signout page.
 */
exports.getSignout = (req, res) => {
  res.clearCookie('token');
  res.clearCookie('secret');
  res.redirect('/');
}
