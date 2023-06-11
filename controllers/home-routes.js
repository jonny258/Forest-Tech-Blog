const router = require('express').Router();
const sequelize = require('../config/connection');
const Blog = require('../models/blog');
const User = require('../models/user');
const BlogUser = require('../models/bloguser')
const Comment = require('../models/comment')
const { format_date, format_time } = require('../utils/helper')

//HOME PAGE
router.get('/', async (req, res) => {
  try {
    const dbBlogUserData = await Blog.findAll({
      include: [
        {
          model: Comment, //gets all the comments for the blogs
        },
        {
          model: User, //get the username for the blogs
          through: BlogUser,
        },
      ],
    }) //gets all the data async
    const blogs = dbBlogUserData.map((blog) => { //change the data so that it is presentable 
      const formattedBlog = blog.get({ plain: true });
      formattedBlog.createdAt = format_date(formattedBlog.createdAt); //change dates on the blog
      formattedBlog.comments.forEach(comment => {
        comment.createdAt = format_date(comment.createdAt); //change dates on the comments
      })
      return formattedBlog;
    });

    res.render('homepage', { //this renders a template, the file structure is very importiant when using templates this line of code can really only work in a views folder
      loggedIn: req.session.loggedIn,
      blogs, //this second argument is the data that i send to the template
    });
  }
  catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})

//DASHBOARD PAGE
router.get('/dashboard', async (req, res) => {
  try {
    if (!req.session.loggedIn) {
      res.redirect('/login')
    } else {
      const loggedInUserId = req.session.userid;
      console.log(loggedInUserId)
      const blogs = await Blog.findAll({ //finds all of the blogs that you authored
        include: [
          {
            model: User,
            through: BlogUser,
            where: { id: loggedInUserId } //this is the line that pulls up only the ones you wrote
          }
        ]
      })
      const blogValues = blogs.map(blog => { //format the data so I can send it to handlebars
        return blog.dataValues
      })
      res.render('dashboard', {
        loggedIn: req.session.loggedIn,
        userBlogs: blogValues
      })
    }
  }
  catch (err) {
    res.status(400).json(err)
  }
})

//SIGN UP
router.get('/signup', (req, res) => {
  res.render('signup')
})

//LOGIN
router.get('/login', (req, res) => {
  if(req.session.loggedIn){ //if you go to the login page the session changes to loggedIn false, this only happens if you are idle for 3 minutes
    req.session.loggedIn = false;
  }
  res.render('login')
})



module.exports = router;
