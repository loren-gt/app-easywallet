const express = require('express');
const userRoute = require('./User');
const walletRoute = require('./Wallet');
const transactionRoute = require('./Transaction');
const notFound = require('../middleware/notFound');

const route = express();
route.use('/user', userRoute);
route.use('/wallet', walletRoute);
route.use('/transaction', transactionRoute);
route.use(notFound);

module.exports = route;
