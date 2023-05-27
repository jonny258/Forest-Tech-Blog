const router = require('express').Router();
const User = require('../../models/user')

router.get('/', (req, res) => {
    User.findAll()
    .then(user => {
        res.json(user)
    })
})



module.exports = router;