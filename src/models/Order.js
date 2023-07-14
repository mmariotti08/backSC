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
        type: DataTypes.ARRAY(DataTypes.JSON),
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "pending",
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
