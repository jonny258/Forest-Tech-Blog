const router = require('express').Router();
const User = require('../../models/user') //pulls in the user model, with this user modle we can select the data in the database
//this user model in this file is the model part talking to the controller part the communication between those 2 goes both ways
const Blog = require('../../models/blog')
const BlogUser = require('../../models/bloguser')

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
  


router.post('/signup', async (req, res) => {
    try{
        const { username, password } = req.body

        const newUserData = await User.create({
            username: username,
            password: password,
        })
        req.session.save(() => {
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

router.post('/login', async (req, res) => {
    try{
        const { username, password } = req.body;
        console.log(username, password)

        const userData = await User.findOne({
            where: {
                username: username
            }
        });

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
        const validatePassword = await checkedPassword(password, userData.dataValues.password)
        console.log(validatePassword)
        if(!validatePassword){
            console.log('password failed')
            res.status(400).json({message: 'Incorrect email or password.'});
            return;
        }
        req.session.save(() => {
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
            req.session.destroy(() => {
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