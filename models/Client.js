const createClient = (sequelize, DataTypes) => {
  const Client = sequelize.define('Client',
  {
    cpf: DataTypes.STRING,

  },
  { timestamps: false, underscored: false });

  Client.associate = (models) => {
    Client.belongsTo(models.User, { as: 'user_c',foreignKey: 'userId' });
  };

  return Client;
};

module.exports = createClient;
