const {
    createUserService,
    findUserService,
    checkHashPassword,
    createToken
} = require('../services');

module.exports = {
    registerUser: async (req, res) => {
        try {
            await createUserService(req, res);
        } catch (e) {
            res.status(400).json({
                message: e.message
            })
        }
    },

    loginUser: async (req, res) => {
        const {email, password} = req.body;
        try {
            const candidate = await findUserService(email);
            if (!candidate) {
                res.status(404).json({
                    message: "Позьзователь не найден"
                })
                return
            }
            const isComparePassword = await checkHashPassword(password, candidate.password);
            if (isComparePassword) {
                const token = createToken({
                    email: candidate.email,
                    userId: candidate.id
                })
                res.status(200).json({
                    id_token: `${token}`
                })
                return
            }
            res.status(400).json({
                message: "It looks like you entered your email or password incorrectly. Want to try again?"
            })
        } catch (e) {
            res.status(400).json({
                message: e.message
            })
        }
    },
};


