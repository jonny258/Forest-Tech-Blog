const router = require('express').Router();

router.get('/', (req, res) => {
    res.json('testing')
})

module.exports = router;
