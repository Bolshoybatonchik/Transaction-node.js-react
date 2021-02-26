const {User} = require('../models')
const bcrypt = require('bcrypt')
const createToken = require('../services/createToken')


const createUserService = async (req, res) => {
    const {username, password, email} = req.body;
    try {
        const hashPassword = await bcrypt.hash(password, 10);
        const result = await User.create({
            name:username,
            password: hashPassword,
            email,
            balance: 500,
        })
        console.log("createUserService",result)
        if (result) {
            const token = createToken({
                userId: result.id,
                email: result.email,
            })
            res.status(200).json({
                id_token: `${token}`
            })
        }
    } catch (e) {
        res.status(400).json({
            message: e.message
        })
    }
}

module.exports = createUserService;