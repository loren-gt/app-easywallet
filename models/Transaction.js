const createTransaction = (sequelize, DataTypes) => {
  const Transaction = sequelize.define('Transaction', {
    payerId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    payeeId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    value: DataTypes.FLOAT,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  },
  { timestamps: false });

  Transaction.associate = (models) => {
    Transaction.belongsTo(models.User, { as: 'user_t', foreignKey: 'payeeId' });
  };

  Transaction.associate = (models) => {
    Transaction.belongsTo(models.Client, { as: 'client_t', foreignKey: 'payerId' });
  };

  return Transaction;
};

module.exports = createTransaction;
