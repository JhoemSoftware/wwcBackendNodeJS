const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('./../utils/connPostgres'); // Tiene que llamarse sí o sí sequalize

class User extends Model {}

User.init({
    nit: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    avatar: {
        type: DataTypes.STRING,
        allowNull: true
    },
    role: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
}, {
    sequelize,
    modelName: "User",
    tableName: "users",
});

module.exports = User;