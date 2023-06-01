const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')
const Blog = require('./blog')

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
        }
    },
    {
        sequelize, 
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
        tableName: 'user',
    }
)

// User.hasMany(Blog, {
//     foreignKey: 'user_id', // Assuming 'user_id' is the foreign key in the 'blogs' table referencing 'id' in the 'users' table
//   });

User.hasMany(Blog, { foreignKey: 'user_id' }); // Define the association

module.exports = User;