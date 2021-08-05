const { Wallet, Transaction } = require('../models');
const user = require('./User');
const { authorizeTransaction, notifyTransaction } = require('../helpers/fetchMessages');
const { code, message } = require('../helpers/messages');

const getWallets = async () => {
  const wallets = await Wallet.findAll({});
  return wallets;
};

const getWalletById = async (id) => {
  const wallet = await Wallet.findByPk(id);
  if (!wallet) {
    const error = { code: code[44], message: message.userIdInexistent };
    throw error;
  }
  return wallet;
};

const getClient = async (payer) => {
  const getPayer = await user.getById(payer);
  const admin = getPayer.isAdmin;
  if (admin) {
    const error = { code: code[40], message: message.userInvalid };
    throw error;
  }
  const wallet = await getWalletById(payer);
  return wallet;
};

const verifyClientBalance = async (payer) => {
  const getPayer = await getClient(payer);
  const getBalance = getPayer.balance;
  if (getBalance > 0) {
    return getBalance;
  }
  const error = { code: code[40], message: message.transactionInvalid };
  throw error;
};

const verifyValue = async (value) => {
  if (value < 1) {
    const error = { code: code[40], message: message.transactionInvalid };
    throw error;
  }
};

const verifyDataType = async (value, payer, payee) => {
  if (typeof payer !== 'number' || typeof payee !== 'number' || typeof value !== 'number') {
    const error = { code: code[40], message: message.incorrectTypeOfData };
    throw error;
  }
};

const userMustBeDifferent = async (payer, payee) => {
  if (payee === payer) {
    const error = { code: code[40], message: message.userMustBeDifferent };
    throw error;
  }
};

const verifyData = async (value, payer, payee) => {
  await verifyDataType(value, payer, payee);
  await userMustBeDifferent(payer, payee);
  await verifyValue(value);
  await user.getClientById(payer);
  await user.getById(payee);
};

const compareAmount = (value, payerBalance) => {
  if (value > payerBalance) {
    const error = { code: code[40], message: message.transactionInvalid };
    throw error;
  }
};

const updateById = async (personId, balanceFinal) => {
  try {
    const updated = await Wallet.update(
      { balance: balanceFinal },
      { where: { id: personId } },
      );
      return updated;
    } catch (e) {
    const error = { code: code[50], message: message.updateFailed };
    throw error;
  }
};

const addTransaction = async (value, payer, payee) => {
  try {
    const published = Date.now();
    const userNotified = false;
    await Transaction.create({
      payerId: payer,
      payeeId: payee,
      value,
      published,
      userNotified,
    });
  } catch (e) {
    const error = { code: code[50], message: message.addFailed };
    throw error;
  }
};

const transferMoneyById = async (value, payer, payee) => {
  await verifyData(value, payer, payee);
  const getPayer = await getWalletById(payer);
  const getPayee = await getWalletById(payee);
  const payerBalance = getPayer.balance;
  const payeeBalance = getPayee.balance;
  compareAmount(value, payerBalance);
  const payerFinalBalance = payerBalance - value;
  const payeeFinalBalance = payeeBalance + value;
  await updateById(payer, payerFinalBalance);
  await updateById(payee, payeeFinalBalance);
  const authorization = await authorizeTransaction();
  await addTransaction(value, payer, payee);
  if (authorization.code === code[20]) {
    return authorization.message;
  }
};

const verifyIfDataExists = async (value, payer, payee) => {
  if (!value || !payer || !payee) {
    const error = { code: code[40], message: message.fieldMissing };
    throw error;
  }
};

const verifyTransaction = async (value, payer, payee) => {
  await verifyIfDataExists(value, payer, payee);
  const balance = await verifyClientBalance(payer);
  compareAmount(value, balance);
  if (value <= balance) {
    const result = await transferMoneyById(value, payer, payee);
    return result;
  } 
};
const updateTransaction = async (value, payer) => {
  try {
    const transactionUpdated = await Transaction.update(
      { userNotified: true },
      {
        where: {
          payerId: payer, value, userNotified: false,
        },
        attributes: ['published'],
      },
    );
    if (transactionUpdated) {
      const notification = await notifyTransaction();
      console.log(notification);
    }
  } catch (e) {
    const error = { message: message.serviceUnavailable };
    console.log(error);
  }
};

module.exports = {
  getWallets,
  getWalletById,
  verifyTransaction,
  updateTransaction,
};