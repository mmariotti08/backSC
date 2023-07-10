const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('Product', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: DataTypes.STRING,
			unique: true
		},
		brand_name: {
			type: DataTypes.STRING,
			
		},
		category: {
			type: DataTypes.ARRAY(DataTypes.STRING),

		},
		color: {
			type: DataTypes.STRING,
		
		},
		gender: {
			type: DataTypes.ARRAY(DataTypes.STRING),
			
		},
		main_picture_url: {
			type: DataTypes.STRING,
			
		},
		retail_price_cents: {
			type: DataTypes.INTEGER,
			
		},
		slug: {
			type: DataTypes.STRING,
			
		},
		status: {
			type: DataTypes.STRING,
			
		},
	}, {
		timestamps: false,
	});
};