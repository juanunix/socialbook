module.exports = (err, req, res, next) => {
  console.log(err);
  if(err.code === 'ECONNREFUSED') {
    err.code = 500;
    err.message = 'Couln\'t connect to the database Error'
  }
  if(!err.code) {
    err.code = 500
  }
  if(err && err.path) {
    res.status(err.code).render(err.path, { error: err.message });
  } else {
    next(err);
  }
}
