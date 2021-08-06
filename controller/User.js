const user = require('../service/User');
const { code } = require('../helpers/messages');

const getAllUsers = async (_req, res) => {
  try {
    const users = await user.getAllUsers();
    res.status(code[20]);
    res.json(users);
  } catch (e) {
    res.status(e.code || code[50]);
    res.json({
      message: e.message,
    });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = await user.getById(id);
    res.status(code[20]);
    res.json(userId);
  } catch (e) {
    res.status(e.code || code[50]);
    res.json({
      message: e.message,
    });
  }
};

module.exports = { getAllUsers, getUserById };