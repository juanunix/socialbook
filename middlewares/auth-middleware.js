const userTokenQueries = require('../models/user_token');
const userQueries = require('../models/user');

module.exports = async (req, res, next) => {
  if(!req.signedCookies) return next();
  const { token, secret } = req.signedCookies;
  if(token && secret) {
    res.locals.user = await userTokenQueries.verifyToken(token, secret);
    if(res.locals.user) {
      res.locals.user = await userQueries.getUserInfo(res.locals.user);
    }
  }
  next();
}
