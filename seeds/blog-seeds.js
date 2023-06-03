const Blog = require('../models/blog');

const blogSeedData = [
  {
    title: 'First Blog Post',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    title: 'Second Blog Post',
    body: 'Nulla facilisi. Ut ut felis placerat, volutpat risus non, mattis justo.',
  },
  {
    title: 'Another Blog Post',
    body: 'Sed gravida justo at dui pulvinar auctor.',
  },
  {
    title: 'Blog Post 4',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    title: 'Blog Post 5',
    body: 'Nulla facilisi. Ut ut felis placerat, volutpat risus non, mattis justo.',
  },
  {
    title: 'Blog Post 6',
    body: 'Sed gravida justo at dui pulvinar auctor.',
  },
  {
    title: 'Blog Post 7',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    title: 'Blog Post 8',
    body: 'Nulla facilisi. Ut ut felis placerat, volutpat risus non, mattis justo.',
  },
  {
    title: 'Blog Post 9',
    body: 'Sed gravida justo at dui pulvinar auctor.',
  },
  {
    title: 'Blog Post 10',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    title: 'Blog Post 11',
    body: 'Nulla facilisi. Ut ut felis placerat, volutpat risus non, mattis justo.',
  },
  {
    title: 'Blog Post 12',
    body: 'Sed gravida justo at dui pulvinar auctor.',
  },
  {
    title: 'Blog Post 13',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    title: 'Blog Post 14',
    body: 'Nulla facilisi. Ut ut felis placerat, volutpat risus non, mattis justo.',
  },
  {
    title: 'Blog Post 15',
    body: 'Sed gravida justo at dui pulvinar auctor.',
  },
  {
    title: 'Blog Post 16',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    title: 'Blog Post 17',
    body: 'Nulla facilisi. Ut ut felis placerat, volutpat risus non, mattis justo.',
  },
  {
    title: 'Blog Post 18',
    body: 'Sed gravida justo at dui pulvinar auctor.',
  },
  {
    title: 'Blog Post 19',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    title: 'Blog Post 20',
    body: 'Nulla facilisi. Ut ut felis placerat, volutpat risus non, mattis justo.',
  },
  {
    title: 'Blog Post 21',
    body: 'Sed gravida justo at dui pulvinar auctor.',
  },
  {
    title: 'Blog Post 22',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    title: 'Blog Post 23',
    body: 'Nulla facilisi. Ut ut felis placerat, volutpat risus non, mattis justo.',
  },
  {
    title: 'Blog Post 24',
    body: 'Sed gravida justo at dui pulvinar auctor.',
  },
  {
    title: 'Blog Post 25',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
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
