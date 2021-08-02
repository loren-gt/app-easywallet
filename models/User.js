const createUser = (sequelize, DataTypes) => (
  sequelize.define('User', {
    isAdmin: DataTypes.BOOLEAN,
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  {
    timestamps: false,
  })
);

module.exports = createUser;
