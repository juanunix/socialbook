const userTokenQueries = require('../models/user_token');

module.exports = async (req, res, next) => {
  if(!req.signedCookies) return next();
  const { token, secret } = req.signedCookies;
  if(token && secret) {
    req.user = await userTokenQueries.verifyToken(token, secret);
    next();
  }
  next();
}
