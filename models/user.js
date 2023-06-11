const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')
const Blog = require('./blog')
const bcrypt = require('bcrypt');

class User extends Model {};

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {//This encrypts the users passwords
        hooks: {
            beforeCreate: async (user) => {
                user.password = await bcrypt.hash(user.password, 10);
            },
            beforeUpdate: async (user) => {
                if (user.changed('password')) {
                    user.password = await bcrypt.hash(user.password, 10);
                }
            },
        },
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
        tableName: 'user',
    }
);


module.exports = User;