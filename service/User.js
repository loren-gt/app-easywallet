const { User } = require('../models');
const { code, message } = require('../helpers/messages');

const getAllUsers = async () => {
  const allUsers = await User.findAll({
    attributes: { exclude: ['password'] },
  });
  return allUsers;
};

const getById = async (id) => {
  try {
    const user = await User.findByPk(
      id,
      { attributes: { exclude: ['password'] } },
      );
      return user;
    } catch (e) {
    const error = { code: code[44], message: message.userIdInexistent }; 
    throw error;
  }
};

const getClientById = async (id) => {
  const getClient = await User.findOne({
    where: { id, isAdmin: false },
    attributes: { exclude: ['password'] },
  });
  return getClient;
};

module.exports = {
  getAllUsers,
  getById,
  getClientById,
};
