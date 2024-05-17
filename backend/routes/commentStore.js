const express = require('express');
const User = require('../models/UserModel.js')
const app = express()
var router = express.Router();
const bodyparser = require('body-parser');
const { FilterDrama } = require('@mui/icons-material');


app.use(express.json())


app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}))

router.post('/',  async(req, res) => {
    const date = req.body.date
    const FullName = req.body.fullName;
    const UserComment = req.body.userComment

    const formData = new User({
        date: date,
        name : FullName,
        usercomment : UserComment
    })
    try {
        await formData.save();
    
        res.send('inserted data.....')
    }catch(err){
        console.log(err)
    }
});

router.get('/', async (req, res) => {
     const users = await User.find({})
      res.send(users)  
 })

module.exports = router;