const router = require('express').Router(); //creates an instance of the router modual


const Blog = require('../../models/blog')
const User = require('../../models/user')
const BlogUser = require('../../models/bloguser')
const Comment = require('../../models/comment')


router.get('/', async (req, res) => { 

    try {
      const dbBlogUserData = await Blog.findAll({
        include: [
            {
              model: Comment, // Include the Comment model
            },
            {
              model: User,
              through: BlogUser,
            },
          ],
      })
      const blogs = dbBlogUserData.map((blog) => {
        return blog.get({ plain: true })
      })
      res.json(blogs)
  
    }
    catch (err) {
      console.log(err)
      res.status(500).json(err) 
    }
  })

module.exports = router; //you must export something so that this can beused in other file locations