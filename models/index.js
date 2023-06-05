//this file will define the relation ships between the models
//and will be able to give me cool things i can do like variable amounts of items in a relationship

const User = require('./user')
const Blog = require('./blog')
const BlogUser = require('./bloguser')
const Comment = require('./comment')

// Blog.belongsTo(User, {
//   through: BlogUser,
//     foreignKey: 'blog_id', 
//   });

// User.hasMany(Blog, {
//     through: BlogUser,
//     foreignKey: 'user_id', 
//   });



Blog.hasMany(Comment, { foreignKey: 'blog_id' });
Comment.belongsTo(Blog, { foreignKey: 'blog_id' });


module.exports = { User, Blog, BlogUser, Comment}