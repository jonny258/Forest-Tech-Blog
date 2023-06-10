const router = require('express').Router();
const sequelize = require('../config/connection'); //i still need to require sequalize here so that i can use some of the different properties
const Blog = require('../models/blog');
const User = require('../models/user');
const BlogUser = require('../models/bloguser')
const Comment = require('../models/comment')
const {format_date, format_time} = require('../utils/helper')

//HOME PAGE
router.get('/', async (req, res) => { //this function is called in async because i have things after the call i make to the database
  //the call to the database takes time so the function will just skip and go to the next part
  try {
    const dbBlogUserData = await Blog.findAll({
      include: [
        {
          model: Comment,
        },
        {
          model: User,
          through: BlogUser,
        },
      ],
    }) //gets all the data async
    const blogs = dbBlogUserData.map((blog) => {
      const formattedBlog = blog.get({ plain: true });
      formattedBlog.createdAt = format_date(formattedBlog.createdAt);
      formattedBlog.comments.forEach(comment => {
        comment.createdAt = format_date(comment.createdAt);
      })
      return formattedBlog;
    });

    if(req.session.loggedIn){
      console.log(blogs)
      res.render('homepage', { //this renders a template, the file structure is very importiant when using templates this line of code can really only work in a views folder
        
        loggedIn: req.session.loggedIn,
        blogs, //this second argument is the data that i send to the template
      });
    }else{
      res.redirect('/login')
    }

  }
  catch (err) {
    console.log(err)
    res.status(500).json(err) //sets the status then sends the error in json
  }
})


router.get('/dashboard', async (req, res) => {
  try{
    const loggedInUserId = req.session.userid;
    console.log(loggedInUserId)
    const blogs = await Blog.findAll({
      include: [
        {
          model: User,
          through: BlogUser,
          where: { id: loggedInUserId}
        }
      ]
    })
    // const formattedBlog = blogs.get({ plain: true });

    // console.log(formattedBlog)
    const blogValues = blogs.map(blog => {
      return blog.dataValues
    })
    console.log(blogValues)
    res.render('dashboard', {
      loggedIn: req.session.loggedIn,
      userBlogs: blogValues
    })
  }

  
  
  catch(err){
    res.status(400).json(err)
  }
})
  // for(let i=0; i<blogs.length; i++){
  //   console.log(blogs[i].dataValues.users[0].dataValues)
  // }

  // const userBlogValues = []
  // for(let i=0; i<blogs.length; i++){

  //   if(blogs[i].dataValues.users[0].dataValues.id === req.session.userid){
  //     userBlogValues.push(blogs[i].dataValues)
  //   }
  // }
  // console.log(userBlogValues)




//SIGN UP
router.get('/signup', (req, res) => {
  res.render('signup')
})

router.get('/login', (req, res) => {
  res.render('login')
})



module.exports = router;
