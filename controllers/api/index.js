const router = require('express').Router(); //calls router

const blogRoutes = require('./blog-routes') //assigns variables to the path routes
const userRoutes = require('./user-routes')

router.use('/blog', blogRoutes) //this declares what the url extention will be for the defined url routes
router.use('/user', userRoutes)

module.exports = router