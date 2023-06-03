const BlogUser = require('../models/bloguser')

const blogUserSeedData = [
    // User 1 - Blogs 1-5
    {
      user_id: 1,
      blog_id: 1,
    },
    {
      user_id: 1,
      blog_id: 2,
    },
    {
      user_id: 1,
      blog_id: 3,
    },
    {
      user_id: 1,
      blog_id: 4,
    },
    {
      user_id: 1,
      blog_id: 5,
    },
    // User 2 - Blogs 6-10
    {
      user_id: 2,
      blog_id: 6,
    },
    {
      user_id: 2,
      blog_id: 7,
    },
    {
      user_id: 2,
      blog_id: 8,
    },
    {
      user_id: 2,
      blog_id: 9,
    },
    {
      user_id: 2,
      blog_id: 10,
    },
    // User 3 - Blogs 11-15
    {
      user_id: 3,
      blog_id: 11,
    },
    {
      user_id: 3,
      blog_id: 12,
    },
    {
      user_id: 3,
      blog_id: 13,
    },
    {
      user_id: 3,
      blog_id: 14,
    },
    {
      user_id: 3,
      blog_id: 15,
    },
    // User 4 - Blogs 16-20
    {
      user_id: 4,
      blog_id: 16,
    },
    {
      user_id: 4,
      blog_id: 17,
    },
    {
      user_id: 4,
      blog_id: 18,
    },
    {
      user_id: 4,
      blog_id: 19,
    },
    {
      user_id: 4,
      blog_id: 20,
    },
    // User 5 - Blogs 21-25
    {
      user_id: 5,
      blog_id: 21,
    },
    {
      user_id: 5,
      blog_id: 22,
    },
    {
      user_id: 5,
      blog_id: 23,
    },
    {
      user_id: 5,
      blog_id: 24,
    },
    {
      user_id: 5,
      blog_id: 25,
    },
  ];
  
  

const seedBlogUser = async () => await BlogUser.bulkCreate(blogUserSeedData);

module.exports = seedBlogUser;
