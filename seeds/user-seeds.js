const User = require('../models/user');

const userSeedData = [
  {
    username: 'john_doe',
    password: 'password123',
  },
  {
    username: 'jane_smith',
    password: 'qwerty456',
  },
  // Add more user seed data as needed
];

const seedUsers = async () => {
  try {
    await User.bulkCreate(userSeedData);
    console.log('User seed data inserted successfully.');
  } catch (error) {
    console.error('Error seeding users:', error);
  }
};

module.exports = seedUsers;