const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const User = require('../models/userModel')

async function register(req, res) {

    try {
        // 1. Check if user already exists
        const foundUser = await User.findOne({ phone: req.body.phone })
        console.log(req.body.phone)
        if (foundUser) {
            return res.status(400).json({ error: 'User already exists' })
        }

        // 2. If they don't, encrypt their password

        // const salt = await bcrypt.genSalt(10)
        // const encryptedPassword = await bcrypt.hash(req.body.phone, salt) 

        // 3. Add new user to database with password encrypted

        const newUser = await User.create({ ...req.body, phone: req.body.phone })

        // 4. Generate a JWT token and return it to user

        const payload = { id: newUser._id, user: newUser.username }
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 300 })

        res.status(200).json({ token }) 
    } catch(err) {
        console.log(err)
        res.status(400).json({ error: err.message })
    }
}

async function login(req, res) {

    try {
        // 1. Check if user exists

        const foundUser = await User.findOne({ phone: req.body.phone })
        console.log('test')

        if (!foundUser) {
            // return res.status(404).json({ error: 'No such user exists' })
            return res.redirect('/register');

        }

        // 2. Check if password provided by user matches the one in database

        // const validPass = await bcrypt.compare(req.body.phone, foundUser.phone)

        // if (!validPass) {
        //     return res.status(400).json({ error: 'Invalid credentials' })
        // }

        // 3. Generate a JWT token and return it to user

        const payload = { id: foundUser._id, user: foundUser.username }
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 3600 })

        res.status(200).json({ token }) 

    } catch(err) {
        console.log(err)
        res.status(400).json({ error: err.message })
    }
}

module.exports = {
    register,
    login
}