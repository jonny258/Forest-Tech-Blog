
const sequelize = require('../config/connection')
const seedBlog = require('./blog-seeds')
const seedUser = require('./user-seeds')
const seedBlogUser = require('./blogUser-seeds')
const seedComments = require('./comment-seeds')



const seedAll = async () => {
    await sequelize.sync({force: true})
    console.log('DATABASE SYNCED')
    await seedUser();
    console.log('USER SEEDED')
    await seedBlog();
    console.log('BLOGS SEEDED')
    await seedBlogUser();
    console.log('BLOGUSER SEEDED')
    await seedComments();
    console.log('COMMENTS SEEDED')


    process.exit(0)
}

seedAll();
 //this seeds the data with bulk create
 //you need to remember to include the npm run seed in the package.json folder