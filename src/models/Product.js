const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Product', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
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
    details: {
      type: DataTypes.STRING,
    },
    gender: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    grid_picture_url: {
      type: DataTypes.STRING,
    },
    has_stock: {
      type: DataTypes.BOOLEAN,
    },
    main_picture_url: {
      type: DataTypes.STRING,
    },
    original_picture_url: {
      type: DataTypes.STRING,
    },
    retail_price_cents: {
      type: DataTypes.INTEGER,
    },
    shoe_condition: {
      type: DataTypes.STRING,
    },
    silhouette: {
      type: DataTypes.STRING,
    },
    size_range: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    sku: {
      type: DataTypes.STRING,
    },
    slug: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
    },
    story_html: {
      type: DataTypes.STRING,
    },
  }, {
    timestamps: false,
  });
};