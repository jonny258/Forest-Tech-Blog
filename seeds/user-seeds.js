const User = require('../models/user');

const userSeedData = [
  {
    username: 'JohnDoe',
    password: 'password123',
  },
  {
    username: 'JaneSmith',
    password: 'p@ssw0rd',
  },
  {
    username: 'AliceJohnson',
    password: 'alicepass',
  },
  {
    username: 'BobWilliams',
    password: 'bobspassword',
  },
  {
    username: 'EmilyDavis',
    password: 'emilypw',
  },
];

module.exports = userSeedData;



const seedUsers = async () => {
  try {
    await User.bulkCreate(userSeedData);
    console.log('User seed data inserted successfully.');
  } catch (error) {
    console.error('Error seeding users:', error);
  }
};

module.exports = seedUsers;