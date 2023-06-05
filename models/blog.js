const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./user'); // Import the User model

class Blog extends Model {}

Blog.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'blog',
    tableName: 'blog',
  }
);


//   Blog.belongsTo(User, {
//     foreignKey: 'user_id', // Assuming 'user_id' is the foreign key in the 'blogs' table referencing 'id' in the 'users' table
//   });
// Establish association

// Blog.belongsTo(User, { foreignKey: 'user_id' }); // Define the association

module.exports = Blog;
