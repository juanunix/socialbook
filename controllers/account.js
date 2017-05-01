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
exports.postLogin = (req, res) => {
  let errorMessage;
  let errorCode;
  if (!req.body) {
    errorMessage = 'Server Error';
    errorCode = 401;
  }
  const { username, password } = req.body;
  if(!username || !password) {
    errorCode = 401;
    errorMessage = 'Username and password are required';
  }
  console.log(username, password);
  if (errorCode && errorMessage) {
    res.status(errorCode).render('account/login', { errorMessage })
  }
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
