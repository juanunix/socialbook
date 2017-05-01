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
      message: 'Invalid Username or password',
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
