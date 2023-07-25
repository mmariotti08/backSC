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
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
      },
      picture_url: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      }
    },
    {
      // Configurar una clave primaria compuesta por productId, orderId y size
      primaryKey: true,
      uniqueKeys: {
        items_unique: {
          fields: ["productId", "orderId", "size"],
        },
      },
      timestamps: false,
    }
  );
};
