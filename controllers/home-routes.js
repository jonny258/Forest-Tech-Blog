const router = require('express').Router();
const sequelize = require('../config/connection');
const Blog = require('../models/blog');
const User = require('../models/user')
 
//HOME PAGE
router.get('/', async (req, res) => {
  try {
    const dbBlogData = await Blog.findAll()
    const blogs = dbBlogData.map((blog) => {
      return blog.get({ plain: true })
    })
    res.render('homepage', {
      blogs,
    });
  }
  catch(err){
    console.log(err)
    res.status(500).json(err)
  }

})

//not async

//SIGN UP
router.get('/signup', (req, res) => {
  res.render('signup')
})

router.post('/signup', async (req, res) => {
  console.log('POST was made SIGNUP')
  const { username, password } = req.body
  if(username && password){
    User.create({
      username: username,
      password: password
    })
    .then((newUser) => {
      console.log(newUser)
    })
    .catch((err) => {
      console.log(err)
    })
  }
})

//LOGIN
//change this to be login not sign up 
router.get('/login', (req, res) => {
  res.render('login')
})

router.post('/login', async (req, res) => {
  console.log('POST was made LOGIN')
  const { username, password } = req.body
  if(username && password){
    const dbUserData = await User.findAll()
    const users = dbUserData.map((user) => {
      return user.get({ plain: true })
    })
    users.forEach(user => {
      if(user === username){
        res.render('homepage')
        return;
      }else{
        console.log('username is not in database')
      }
    })
  }
})


module.exports = router;
