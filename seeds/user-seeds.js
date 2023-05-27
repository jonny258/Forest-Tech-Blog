const User = require('../models/user')

const seedUserData = [
    {
      username: 'john_doe',
      password: 'password123',
    },
    {
      username: 'jane_smith',
      password: 'pass321word',
    },
    {
      username: 'alex_johnson',
      password: 'securepass',
    },
    {
      username: 'emma_wilson',
      password: 'password456',
    },
    {
      username: 'michael_brown',
      password: 'pass789word',
    },
    {
      username: 'sarah_miller',
      password: 'strongpassword',
    },
    {
      username: 'david_jones',
      password: 'password1234',
    },
    {
      username: 'emily_davis',
      password: 'pass4321word',
    },
    {
      username: 'jacob_smith',
      password: 'mypassword',
    },
    {
      username: 'olivia_williams',
      password: 'password789',
    },
    {
      username: 'william_jackson',
      password: 'passwordabc',
    },
    {
      username: 'sophia_thomas',
      password: 'pass987word',
    },
    {
      username: 'noah_anderson',
      password: 'mypassword123',
    },
    {
      username: 'mia_taylor',
      password: 'passwordxyz',
    },
    {
      username: 'ethan_martin',
      password: 'pass2468word',
    },
    {
      username: 'ava_clark',
      password: 'password000',
    },
    {
      username: 'logan_hall',
      password: 'password111',
    },
    {
      username: 'harper_lee',
      password: 'pass222word',
    },
    {
      username: 'lucas_morris',
      password: 'password333',
    },
    {
      username: 'amelia_turner',
      password: 'pass444word',
    },
  ];
  
const seedUser = () => User.bulkCreate(seedUserData);

module.exports = seedUser;
  