const router = require('express').Router();

//test database

const blogData = [
    {
      author: 'John Doe',
      title: 'Introduction to JavaScript',
      body: 'JavaScript is a powerful programming language used for web development.',
    },
    {
      author: 'Jane Smith',
      title: 'Mastering CSS',
      body: 'CSS allows you to style and layout web pages with ease.',
    },
    {
      author: 'Alex Johnson',
      title: 'The Art of HTML',
      body: 'HTML is the foundation of every webpage on the internet.',
    },
    {
      author: 'Sarah Williams',
      title: 'Deep Dive into React',
      body: 'React is a popular JavaScript library for building user interfaces.',
    },
    {
      author: 'Michael Brown',
      title: 'Python for Data Science',
      body: 'Python is widely used in the field of data science and analysis.',
    },
    {
      author: 'Emily Davis',
      title: 'Exploring UX Design',
      body: 'UX design focuses on enhancing user satisfaction with a product.',
    },
    {
      author: 'David Johnson',
      title: 'Getting Started with Node.js',
      body: 'Node.js allows for server-side JavaScript development.',
    },
    {
      author: 'Sophia Martinez',
      title: 'Mastering Responsive Web Design',
      body: 'Responsive web design ensures websites adapt to different devices.',
    },
    {
      author: 'Robert Wilson',
      title: 'The Art of Algorithms',
      body: 'Understanding algorithms is crucial for efficient problem-solving.',
    },
    {
      author: 'Olivia Anderson',
      title: 'Exploring Data Visualization',
      body: 'Data visualization helps communicate insights through visuals.',
    }
  ];
  

//end of test database
  

router.get('/', (req, res) => {
    res.render('homepage', {
        blogData,
    });
})

module.exports = router;
