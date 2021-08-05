const userRoute = require('express').Router();
const user = require('../controller/User');

userRoute
  .get(
    '/',
    user.getAllUsers,
  )
  .get(
    '/:id',
    user.getUserById,
  );

module.exports = userRoute;