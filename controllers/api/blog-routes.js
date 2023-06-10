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

router.post('/comment', async (req, res) => {
  const user = await User.findByPk(req.session.userid)
  const username = user.dataValues.username
  const newComment = await Comment.create({
    body: req.body.comment,
    author: username,
    blog_id: req.body.blog_id
  })

  if(!newComment){
    console.log('something went wrong')
    res.status(400).json({
      message: "Something went wrong, please try again"
    })
    return
  }

  res.json({
    comment: newComment
  });
})


module.exports = router; //you must export something so that this can beused in other file locations