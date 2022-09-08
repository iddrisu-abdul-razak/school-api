const User = require('../models/userSchema')
const bcryptjs = require('bcryptjs')

// adding a user

const addUser = async (req, res) => {
    //encryption
    const salt = await bcryptjs.genSalt(10)
    const hashedPassword = await bcryptjs.hash(req.body.password)
    
    const newUser = newUser({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password,
    })

    await newUser.save();
    res.status(201).json({
        id: newUser._id,
        username: newUser.username,
        email: newUser.email
    })
}

module.exports = {addUser}