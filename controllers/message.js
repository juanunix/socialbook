/**
 * GET /messages
 * Messages page.
 */
exports.getMessagesList = (req, res) => {
 res.render('messages');
}

/**
 * GET /messages/:id
 * Messages page.
 */
exports.getUserChat = (req, res) => {
  res.render('chat');
}
