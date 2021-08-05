const wallet = require('../service/Wallet');
const { code } = require('../helpers/messages');
// const { notifyTransaction } = require('../helpers/fetchMessages');

const transferMoneyById = async (req, res) => {
  try {
    const { value, payer, payee } = req.body;
    const getTransaction = await wallet.verifyTransaction(value, payer, payee);
    const transactionCompleted = res.status(code[20]).json({ message: getTransaction });
    if (transactionCompleted) {
      const notification = await wallet.updateTransaction(value, payer);
      return notification;
    }
  } catch (e) {
    res.status(e.code || code[50]).json({
      message: e.message,
    });
  }
};

module.exports = { transferMoneyById };