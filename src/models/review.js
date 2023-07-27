const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define(
    'Reviews',
    {
      rating: {
        allowNull: false,
        type: DataTypes.ENUM('1', '2', '3', '4', '5')
      },
      opinion: {
        allowNull: false,
        type: DataTypes.STRING
      }
    },
    {
      timestamps: true,
    }
  )
}