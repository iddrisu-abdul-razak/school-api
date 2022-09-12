const  { validate } = require("../config/Validator")
const User = require("../models/userSchema")
const bcryptjs = require("bcryptjs")

// addind a user
const addUser = async (req, res) => {
    const { username, email,password } = req.body;
    const valid = await validate({ username,email,password});
    if (valid) {

        const hashedPassword =await bcryptjs.hash(valid.password,8)

        const savedUser = await User.create({
            username,
            email,
            password:hashedPassword,
        });

        res.status(201).json({
            success: true,
            massage:"user create",
            savedUser,
        });
    } else {
        res.status(400).json({
            error: true,
            message: "Invalid data",
       });
    }
};

module.exports = {addUser}