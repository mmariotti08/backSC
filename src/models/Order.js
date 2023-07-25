const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Order",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      total_amount: {
        type: DataTypes.INTEGER,
      },
      description: {
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.STRING,
      },
      payment_method: {
        type: DataTypes.STRING,
      },
      shipping_address: {
        type: DataTypes.STRING,
      },
      delivery_date: {
        type: DataTypes.DATE,
      },
    },
    {
      timestamps: true,
    }
  );
};
