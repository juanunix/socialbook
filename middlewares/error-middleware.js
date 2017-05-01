module.exports = (err, req, res, next) => {
  if(err && err.path) {
    res.status(err.code).render(err.path, { error: err.message });
  } else {
    next(err);
  }
}
