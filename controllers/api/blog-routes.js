const router = require('express').Router(); //creates an instance of the router modual


const Blog = require('../../models/blog')

//its good practice to keep the seperate files seperated, so that you edit and delete parts of them more easily
router.get('/', (req, res) => {
    Blog.findAll()
    .then(blogs => {
        res.json(blogs)
    })
})

module.exports = router; //you must export something so that this can beused in other file locations