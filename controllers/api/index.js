const router = require('express').Router();

const blogRoutes = require('./blog-routes')
const userRoutes = require('./user-routes')

router.use('/blog', blogRoutes)
router.use('/user', userRoutes)

module.exports = router