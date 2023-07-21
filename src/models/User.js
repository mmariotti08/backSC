const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('User', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
		},
        idUser: {
			type: DataTypes.STRING,
		},
        name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		last_name: {
			type: DataTypes.STRING,
		},
        phone: {
            type: DataTypes.STRING,
        },
        mail: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
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
        },
        address : {
            type: DataTypes.JSON
        
        }


    },{
        timestamps: true
    })

}
