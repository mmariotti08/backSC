const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Order', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
		},
        description : {
            type: DataTypes.ARRAY(DataTypes.STRING)
        }
        

    },{
        timestamps: true
    })

}
