const router = require('express').Router();
const Blog = require('../../models/blog')

router.get('/', (req, res) => {
    Blog.findAll()
    .then(blogs => {
        res.json(blogs)
    })
})



module.exports = router;