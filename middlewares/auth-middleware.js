const userTokenQueries = require('../models/user_token');
const userQueries = require('../models/user');

module.exports = async (req, res, next) => {
  if(!req.signedCookies) return next();
  const { token, secret } = req.signedCookies;
  if(token && secret) {
    res.locals.user_id = await userTokenQueries.verifyToken(token, secret);
    if(res.locals.user_id) {
      try {
        res.locals.user = await userQueries.getUserInfo(res.locals.user_id);
      } catch(e) {
        res.clearCookie('token');
        res.clearCookie('secret');
      }
    }
  }
  next();
}
