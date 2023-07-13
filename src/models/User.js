const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('User', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
		},
        fullName: {
			type: DataTypes.STRING,
            allowNull: false,
			
		},
        phone: {
            type: DataTypes.INTEGER,
        },
        mail: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password : {
            type: DataTypes.STRING,
        },
        administrator :{
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        active : {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }


    },{
        timestamps: true
    })

}
