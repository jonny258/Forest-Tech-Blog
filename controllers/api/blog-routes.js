const router = require('express').Router(); //creates an instance of the router modual
const User = require('../../models/user') //pulls in the user model, with this user modle we can select the data in the database
//this user model in this file is the model part talking to the controller part the communication between those 2 goes both ways

router.get('/', (req, res) => {
    User.findAll() //selects all of the data from the database
    .then(user => {
        res.json(user) //sends the data in json format
    })
})



module.exports = router; //you must export something so that this can beused in other file locations