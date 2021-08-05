const transactionRoute = require('express').Router();
const transaction = require('../controller/Transaction');

transactionRoute
  .post(
    '/',
    transaction.transferMoneyById,
  );

module.exports = transactionRoute;