const { DataTypes } = require("sequelize");
const db = require("./db");//Is reference to database file, folder structure may change
const UserModel = db.define("user", {
    firstName: {
        type: DataTypes.STRING(1000),
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING(1000),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(1000),
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING(1000),
        allowNull: false,
        unique : true
    },
    isFounder: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    isFunder: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    }
})
module.exports = UserModel;