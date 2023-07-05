const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  	sequelize.define('Stock', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		productId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: "Products",
				key: "id",
			},
		},
		size: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		quantity: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
  	}, {
		timestamps: false,
	});
};