const Blog = require('../models/blog');

const blogSeedData = [
  {
    user_id: 1,
    title: 'First Blog Post',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    user_id: 1,
    title: 'Second Blog Post',
    body: 'Nulla facilisi. Ut ut felis placerat, volutpat risus non, mattis justo.',
  },
  {
    user_id: 2,
    title: 'Another Blog Post',
    body: 'Sed gravida justo at dui pulvinar auctor.',
  },
  // Add more blog seed data as needed
];

const seedBlogs = async () => {
  try {
    await Blog.bulkCreate(blogSeedData);
    console.log('Blog seed data inserted successfully.');
  } catch (error) {
    console.error('Error seeding blogs:', error);
  }
};

module.exports = seedBlogs;
