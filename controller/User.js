const user = require('../service/User');
const { code } = require('../helpers/messages');

const getAllUsers = async (_req, res) => {
  try {
    const users = await user.getAllUsers();
    res.status(code[20]).json(users);
  } catch (e) {
    res.status(e.code || code[50]).json({
      message: e.message,
    });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = await user.getById(id);
    res.status(code[20]).json(userId);
  } catch (e) {
    res.status(e.code || code[50]).json({
      message: e.message,
    });
  }
};

module.exports = { getAllUsers, getUserById };