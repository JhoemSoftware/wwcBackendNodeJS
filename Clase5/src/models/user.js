const { DataTypes, model } = require('sequelize');

class User extends Model {}

User.init({
    firstName: {
        type: DataTypes
    }
});

module.exports = User;