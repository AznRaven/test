const User = require('../models/userModel')

async function show(req, res) {
    try {
        const foundUser = await User.findById(req.id)
        
        res.json({ 
            username: foundUser.username, 
            email: foundUser.email,
            phone: foundUser.phone,
            id: req.id
        })

    } catch (error) {
        res.json({ error: error.message })
    }
}

module.exports = {
    show
}