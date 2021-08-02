const createAdmin = (sequelize, DataTypes) => {
  const Admin = sequelize.define('Admin', {
    userId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    cnpj: DataTypes.STRING,
  },
  { timestamps: false });

  Admin.associate = (models) => {
    Admin.belongsTo(models.User, { as: 'user', foreignKey: 'userId' });
  };

  return Admin;
};

module.exports = createAdmin;
