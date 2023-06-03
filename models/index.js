//this file will define the relation ships between the models
//and will be able to give me cool things i can do like variable amounts of items in a relationship

const User = require('./user')
const Blog = require('./blog')
const BlogUser = require('./bloguser')

Blog.belongsTo(User, {
  through: BlogUser,
    foreignKey: 'blog_id', // Assuming 'user_id' is the foreign key in the 'blogs' table referencing 'id' in the 'users' table
  });

User.hasMany(Blog, {
    through: BlogUser,
    foreignKey: 'user_id', // Assuming 'user_id' is the foreign key in the 'blogs' table referencing 'id' in the 'users' table
  });



module.exports = { User, Blog}