const createWallet = (sequelize, DataTypes) => {
  const Wallet = sequelize.define('Wallet', {
    userId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    balance: DataTypes.FLOAT,
  },
  { timestamps: false });

  Wallet.associate = (models) => {
    Wallet.belongsTo(models.User, { as: 'user', foreignKey: 'userId' });
  };

  return Wallet;
};

module.exports = createWallet;
