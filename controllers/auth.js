/**
 * GET /login
 * Login page.
 */
exports.getLogin = (req, res) => {
  res.render('login');
}

/**
 * GET /signup
 * Login page.
 */
exports.getSignup = (req, res) => {
  res.render('signup');
}

/**
 * GET /account
 * Account Settings page.
 */
exports.getAccount = (req, res) => {
  res.render('account');
}


/**
 * GET /forgot
 * Forgot page.
 */
exports.getForgot = (req, res) => {
  res.render('forgot');
}

/**
 * GET /reset/:token
 * Reset Token page.
 */
exports.getReset = (req,res) => {
  res.render('reset');
}
