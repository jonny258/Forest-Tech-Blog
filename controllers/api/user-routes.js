const router = require('express').Router();
const User = require('../../models/user') //pulls in the user model, with this user modle we can select the data in the database
const Blog = require('../../models/blog')
const BlogUser = require('../../models/bloguser')

//to test the database with insomnia
router.get('/', (req, res) => {
    User.findAll({
       include: [
        {
            model: Blog,
            through: BlogUser,
        }
       ]
    })
      .then(users => {
        res.json(users); // Send the data in JSON format
      })
      .catch(error => {
        console.error('Error retrieving users:', error);
        res.status(500).json({ error: 'An error occurred while retrieving users' });
      });
  });
  

//Makes a new user on sign up
router.post('/signup', async (req, res) => {
    try{
        const { username, password } = req.body

        const newUserData = await User.create({
            username: username,
            password: password,
        })
        req.session.save(() => { //makes a session and sets the login to true 
            req.session.loggedIn = true;
            req.session.userid = newUserData.dataValues.id;
            res.status(200).json(newUserData)
        })
    }
    catch(err) {
        console.error(err)
        res.status(500).json(err)
    }
})

//login routes
router.post('/login', async (req, res) => {
    try{
        const { username, password } = req.body;
        console.log(username, password)

        const userData = await User.findOne({
            where: {
                username: username
            }
        });
        //username failed
        if(!userData){
            console.log('username failed')
            res.status(400).json({message: 'Incorrect email or password.'});
            return;
        }

        const checkedPassword = async (password, loginPassword) => {
            console.log(password, loginPassword)
            if(password !== loginPassword){
                return false
            }else{
                return true
            }
        }

        //password failed
        const validatePassword = await checkedPassword(password, userData.dataValues.password)
        if(!validatePassword){
            console.log('password failed')
            res.status(400).json({message: 'Incorrect email or password.'});
            return;
        }
        req.session.save(() => { //makes a session and sets the login to true 
            req.session.loggedIn = true;
            req.session.userid = userData.dataValues.id;
            res.status(200).json({ user: userData, message: "Logged in"})
        })
    }
    catch(err) {
        console.error(err)
        res.status(500).json(err)
    }
})

//set up a route in handle bars that displayes the logout button
router.post('/logout', async(req, res) => {
    try{
        if(req.session.loggedIn){
            req.session.destroy(() => { //destorys the session
                res.status(200).end();
            });
        } else {
            res.status(404).end();
        }
    }catch(e){
        console.error(e);
        res.status(500).json(e);
    }
});

module.exports = router;