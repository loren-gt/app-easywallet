const { code, message } = require('../helpers/messages');

module.exports = (req, res, next) => {
  if (req.accepts('json')) {
    res.status(code[44]).send({ error: message.notFound });
    next();
  }
};