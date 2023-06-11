const router = require('express').Router()

const apiRoutes = require('./api')
const homeRoutes = require('./home-routes')

router.use('/', homeRoutes) //defining the routes
router.use('/api', apiRoutes)

module.exports = router