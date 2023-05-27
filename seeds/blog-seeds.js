const Blog = require('../models/blog')

const seedBlogData = [
    {
      author: 'John Doe',
      title: 'First Blog Post',
      body: 'This is the first blog post.',
    },
    {
      author: 'Jane Smith',
      title: 'Second Blog Post',
      body: 'This is the second blog post.',
    },
    {
      author: 'Alex Johnson',
      title: 'Third Blog Post',
      body: 'This is the third blog post.',
    },
    {
      author: 'Sarah Williams',
      title: 'Fourth Blog Post',
      body: 'This is the fourth blog post.',
    },
    {
      author: 'Michael Brown',
      title: 'Fifth Blog Post',
      body: 'This is the fifth blog post.',
    },
    {
      author: 'Emily Davis',
      title: 'Sixth Blog Post',
      body: 'This is the sixth blog post.',
    },
    {
      author: 'David Johnson',
      title: 'Seventh Blog Post',
      body: 'This is the seventh blog post.',
    },
    {
      author: 'Sophia Martinez',
      title: 'Eighth Blog Post',
      body: 'This is the eighth blog post.',
    },
    {
      author: 'Robert Wilson',
      title: 'Ninth Blog Post',
      body: 'This is the ninth blog post.',
    },
    {
      author: 'Olivia Anderson',
      title: 'Tenth Blog Post',
      body: 'This is the tenth blog post.',
    },
  ];
  
  const seedBlog = () => Blog.bulkCreate(seedBlogData);

  module.exports = seedBlog;
  