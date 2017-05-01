/**
 * GET /login
 * Login page.
 */
exports.getLogin = (req, res) => {
  res.render('account/login');
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
