const createClient = (sequelize, DataTypes) => {
  const Client = sequelize.define('Client', {
    userId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    cpf: DataTypes.STRING,
  },
  { timestamps: false });

  Client.associate = (models) => {
    Client.belongsTo(models.User, { as: 'user', foreignKey: 'userId' });
  };
  
  return Client;
};

module.exports = createClient;
