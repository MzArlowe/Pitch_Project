const { DataTypes } = require("sequelize");
const db = require("./db");//Is reference to database file, folder structure may change
const UserModel = db.define("user", {
    firstName: {
        type: DataTypes.STRING(30), // values can change
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING(30), // values can change
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(50), // values can change
        allowNull: false,
        unique: true,
        required : true // will this be needed if username is also an option?
    },
    username: {
        type: DataTypes.STRING(30), // can be changed. added in for more flexibility when signing in
        allowNull : false,
        unique: true
    },
    password: {
        type: DataTypes.STRING(20), // values can change
        allowNull: false,
        unique : true,
        minlength : 6, // value can change
        required : true
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