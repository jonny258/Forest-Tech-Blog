
const sequelize = require('../config/connection')
const seedBlog = require('./blog-seeds')
const seedUser = require('./user-seeds')



const seedAll = async () => {
    await sequelize.sync({force: true})
    console.log('DATABASE SYNCED')
    await seedBlog();
    console.log('BLOGS SEEDED')
    await seedUser();
    console.log('USER SEEDED')

    process.exit(0);
}

seedAll();
 //this seeds the data with bulk create
 //you need to remember to include the npm run seed in the package.json folder