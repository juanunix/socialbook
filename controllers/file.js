const fileQueries = require('../models/file');
/**
 * GET /image/:id
 * Image page.
 */
exports.getFile = async (req, res, next) => {
  const { id } = req.params;
  const content = await fileQueries.getFile(id);
  res.contentType('image/png');
  res.end(content);
}
