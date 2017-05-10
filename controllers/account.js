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
    return next(Object.assign(e, {
      path: 'account/login'
    }))
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
    let verify_token = await userQueries.signup(email, name, username, password);
    verify_token = Buffer(JSON.stringify(verify_token)).toString('base64')
    console.log(`http://localhost:5000/verify?verify_token=${verify_token}`)
    res.cookie('user_id', id, { signed: true })
    res.redirect('/verify');
  } catch (e) {
    return next(Object.assign(e, {
      path: 'account/signup'
    }))
  }
  next();
}

exports.getVerify = async (req, res, next) => {
  const { user_id } = req.signedCookies
  res.clearCookie('user_id')
  let { verify_token } = req.query
  if(verify_token) {
    try {
      verify_token = Buffer.from(verify_token, 'base64').toString()
      console.log(verify_token)
      const { id, verify_code } = JSON.parse(verify_token);
      // Verify verify_code
      const isVerified = await userQueries.verify(id, verify_code);
      if(isVerified) {
        return next({
          code: 401,
          message: 'Invalid Token',
          path: 'account/verify'
        })
      }
      const { token, secret } = await userTokenQueries.newToken(id);
      res.cookie('token', token, { signed: true });
      res.cookie('secret', secret, { signed: true });
      res.redirect('/');
    } catch (e) {
      return next({
        code: 401,
        message: 'Invalid Token',
        path: 'account/verify'
      })
    }
  }
  try {
    // Send verify_code to email
    const user = await userQueries.getUserInfo(user_id, false);
    res.cookie('username', user.username, { signed: true })
    return res.render('account/verify')
  } catch (e) {
    return next(Object.assign(e, {
      path: 'account/verify'
    }))
  }
  next();
}

exports.postVerify = async (req, res, next) => {
  const { username } = req.signedCookies
  res.clearCookie('username')
  if (!req.body) {
    return next({
      code: 401,
      message: 'Server Error',
      path: 'account/verify'
    })
  }
  const { verify_code } = req.body
  console.log(username, verify_code)
  next()
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
