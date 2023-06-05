const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

const User = require('./user');
const Blog = require('./blog');

class BlogUser extends Model {}

BlogUser.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            }
        },
        blog_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'blog',
                key: 'id',
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'blog_user',
    }
)

// Blog.belongsTo(User, {
//     through: BlogUser,
//     foreignKey: 'blog_id',
//   });
  
//   User.belongsToMany(Blog, {
//     through: BlogUser,
//     foreignKey: 'user_id',
//   });

User.belongsToMany(Blog, { through: BlogUser });

Blog.belongsToMany(User, { through: BlogUser });



module.exports = BlogUser;