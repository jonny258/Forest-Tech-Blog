const router = require('express').Router(); //creates an instance of the router modual


const Blog = require('../../models/blog')
const User = require('../../models/user')
const BlogUser = require('../../models/bloguser')

//its good practice to keep the seperate files seperated, so that you edit and delete parts of them more easily
router.get('/', async (req, res) => { //this function is called in async because i have things after the call i make to the database
    //the call to the database takes time so the function will just skip and go to the next part
    try {
      const dbBlogUserData = await Blog.findAll({
        include: [
          {
            model: User,
            through: BlogUser,
          }
        ]
      }) //gets all the data async
      const blogs = dbBlogUserData.map((blog) => { //this map function gives me a new array with all the SQL data turned into normal json data
        return blog.get({ plain: true }) //this is one of the properties that i need to call to get it wo work
      })
      res.json(blogs)
  
    }
    catch (err) {
      console.log(err)
      res.status(500).json(err) //sets the status then sends the error in json
    }
  })

module.exports = router; //you must export something so that this can beused in other file locations