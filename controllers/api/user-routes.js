const router = require('express').Router();
const Blog = require('../../models/blog')

//its good practice to keep the seperate files seperated, so that you edit and delete parts of them more easily
router.get('/', (req, res) => {
    Blog.findAll()
    .then(blogs => {
        res.json(blogs)
    })
})


router.post('/signup', (req, res) => {
  const { username, password } = req.body
  console.log(username)
  console.log(password)
})

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  console.log('login: ' + username) 
  console.log('login: ' + password) 
})


module.exports = router;