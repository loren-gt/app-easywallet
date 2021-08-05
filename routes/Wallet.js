const walletRoute = require('express').Router();
const wallet = require('../controller/Wallet');

walletRoute
  .get(
    '/',
    wallet.getWallets,
  )
  .get(
    '/:id',
    wallet.getWalletById,
  );

module.exports = walletRoute;