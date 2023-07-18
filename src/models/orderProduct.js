const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "OrderProduct",
    {
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      size: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      // Configurar una clave primaria compuesta por productId, orderId y size
      primaryKey: true,
      uniqueKeys: {
        items_unique: {
          fields: ["productId", "orderId", "size"],
        },
      },
      timestamps: true,
    }
  );
};
