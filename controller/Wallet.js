const wallet = require('../service/Wallet');
const { code } = require('../helpers/messages');

const getWallets = async (_req, res) => {
  try {
    const wallets = await wallet.getWallets();
    res.status(code[20]).json(wallets);
  } catch (e) {
    res.status(e.code || code[50]).json({
      message: e.message,
    }).send();
  }
};

const getWalletById = async (req, res) => {
  try {
    const { id } = req.params;
    const walletId = await wallet.getWalletById(id);
    res.status(code[20]).json(walletId);
  } catch (e) {
    res.status(e.code || code[50]).json({
      message: e.message,
    });
  }
};

module.exports = { getWallets, getWalletById };