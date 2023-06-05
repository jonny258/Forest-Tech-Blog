
const Comment = require('../models/comment')

const commentsSeed = [
    {
      body: 'Great post! I learned a lot from it.',
      author: 'John Doe',
      blog_id: 1,
    },
    {
      body: 'This topic has always fascinated me. Thanks for sharing!',
      author: 'Jane Smith',
      blog_id: 1,
    },
    {
      body: 'I have a different perspective on this matter...',
      author: 'David Johnson',
      blog_id: 2,
    },
    {
      body: 'Wow, I never thought of it that way before.',
      author: 'Emily Davis',
      blog_id: 3,
    },
    {
      body: 'Interesting points! Can you elaborate more on the second one?',
      author: 'Michael Wilson',
      blog_id: 3,
    },
    {
      body: 'I completely agree with your analysis.',
      author: 'Sarah Thompson',
      blog_id: 4,
    },
    {
      body: 'I disagree with some of the conclusions you drew.',
      author: 'Daniel Anderson',
      blog_id: 5,
    },
    {
      body: 'This post made me reconsider my own beliefs.',
      author: 'Olivia Martinez',
      blog_id: 6,
    },
    {
      body: 'I have a question regarding the third paragraph.',
      author: 'James Lee',
      blog_id: 6,
    },
    {
      body: 'Well written and thoroughly researched. Kudos!',
      author: 'Sophia Clark',
      blog_id: 7,
    },
    {
      body: 'Ive shared this post with my colleagues. We found it very insightful.',
      author: 'Liam Lewis',
      blog_id: 8,
    },
    {
      body: 'Your writing style is engaging and easy to follow.',
      author: 'Ava Rodriguez',
      blog_id: 8,
    },
    {
      body: "I'm looking forward to reading more from you.",
      author: 'Noah Turner',
      blog_id: 9,
    },
    {
      body: 'The content of this post is relevant to my current project.',
      author: 'Mia Hall',
      blog_id: 10,
    },
    {
      body: 'I found a typo in the second paragraph. Just wanted to let you know.',
      author: 'Ethan Lewis',
      blog_id: 11,
    },
    {
      body: 'I appreciate the effort you put into this post. It shows.',
      author: 'Isabella Martinez',
      blog_id: 12,
    },
    {
      body: 'I would love to see more examples of the concepts you discussed.',
      author: 'William Thompson',
      blog_id: 12,
    },
    {
      body: 'This post challenged my assumptions and broadened my perspective.',
      author: 'Sofia Johnson',
      blog_id: 13,
    },
    {
      body: 'I had a similar experience and can relate to what you shared.',
      author: 'Benjamin Davis',
      blog_id: 14,
    },
    {
      body: 'This is one of the best posts I\'ve read on this topic. Well done!',
      author: 'Emma Wilson',
      blog_id: 15,
    },
  ];
  

  const seedComments = async () => {
    try {
      await Comment.bulkCreate(commentsSeed);
      console.log('User seed data inserted successfully.');
    } catch (error) {
      console.error('Error seeding users:', error);
    }
  };


  module.exports = seedComments;
  