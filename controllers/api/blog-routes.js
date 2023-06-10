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
  try {
    if (!req.session.loggedIn) {
      res.status(400).json({ alert: 'Must be logged in to make comments.' });
    } else {
      const user = await User.findByPk(req.session.userid)
      const username = user.dataValues.username
      const newComment = await Comment.create({
        body: req.body.comment,
        author: username,
        blog_id: req.body.blog_id
      })

      if (!newComment) {
        console.log('something went wrong')
        res.status(400).json({
          message: "Something went wrong, please try again"
        })
        return
      }

      res.json({
        comment: newComment
      });
    }
  }
  catch (err) {
    res.status(500).json(err)
  }
})

router.post('/newblog', async (req, res) => {
  try {
    const newBlog = await Blog.create({
      title: req.body.title,
      body: req.body.body
    })

    const newBlogUser = await BlogUser.create({
      user_id: req.session.userid,
      blog_id: newBlog.dataValues.id
    })
  }
  catch (err) {
    res.status(400).json(err)
  }

})

router.delete('/', async (req, res) => {
  try {
    console.log(req.body)
    const blog = await Blog.findByPk(req.body.id)
    console.log(blog)

    const deleted = await blog.destroy()

    res.json({ data: deleted})
  }
  catch (err) {
    res.status(500).json(err)
  }
})


router.put('/', async (req, res) => {
  try {
    console.log(req.body)
    //const blog = await Blog.findByPk(req.body.id)

    const updateBlog = await Blog.update(
      {
        title: req.body.title,
        body: req.body.body
      },
      {
        where: {
          id: req.body.id
        }
      }
    )
    res.setHeader('Refresh', '0');
    res.status(200).end();
    // res.json({ data: updateBlog})


  }
  catch (err) {
    res.status(500).json(err)
  }
})


module.exports = router; //you must export something so that this can beused in other file locations