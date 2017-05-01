const fileQueries = require('../models/file');
/**
 * GET /image/:id
 * Image page.
 */
exports.getFile = async (req, res, next) => {
  try {
    const { id } = req.params;
    const content = await fileQueries.getFile(id);
    if(!content) {
      throw new Error('404');
      return;
    }
    res.contentType('image/png');
    res.end(content);
  } catch(e) {
    next({
      code: 404,
      message: 'Image Not found',
      path: '404'
    })
  }
}
