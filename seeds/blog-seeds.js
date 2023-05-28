const Blog = require('../models/blog')

const seedBlogData = [
    {
      author: 'John Doe',
      title: 'Introduction to JavaScript',
      body: 'JavaScript is a popular programming language used for...',
    },
    {
      author: 'Jane Smith',
      title: 'Mastering HTML5 and CSS3',
      body: 'HTML5 and CSS3 are essential technologies for web development...',
    },
    {
      author: 'Alex Johnson',
      title: 'Getting Started with React',
      body: 'React is a powerful JavaScript library for building user interfaces...',
    },
    {
      author: 'Sarah Williams',
      title: 'Deep Dive into Node.js',
      body: 'Node.js is a runtime environment that allows JavaScript...',
    },
    {
      author: 'Michael Brown',
      title: 'The Art of Responsive Web Design',
      body: 'Responsive web design ensures that websites look great and function...',
    },
    {
      author: 'Emily Davis',
      title: 'Exploring Python for Data Science',
      body: 'Python is widely used in the field of data science for its...',
    },
    {
      author: 'David Johnson',
      title: 'Building RESTful APIs with Express.js',
      body: 'Express.js is a popular web framework for building scalable...',
    },
    {
      author: 'Sophia Martinez',
      title: 'Introduction to SQL and Database Management',
      body: 'SQL is a standard language for managing relational databases...',
    },
    {
      author: 'Robert Wilson',
      title: 'Securing Web Applications with Authentication and Authorization',
      body: 'Implementing user authentication and authorization is crucial...',
    },
    {
      author: 'Olivia Anderson',
      title: 'Automated Testing with Selenium and WebDriver',
      body: 'Selenium and WebDriver are widely used for automating...',
    },
  ];
  
  module.exports = seedBlogData;
  
  
  const seedBlog = () => Blog.bulkCreate(seedBlogData);

  module.exports = seedBlog;
  