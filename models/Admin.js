const createAdmin = (sequelize, DataTypes) => {
  const Admin = sequelize.define('Admin',
  {
    cnpj: DataTypes.STRING,
  },
  { timestamps: false, underscored: false });

  Admin.associate = (models) => {
    Admin.belongsTo(models.User, { as: 'user_a',foreignKey: 'userId' });
  };

  return Admin;
};

module.exports = createAdmin;
