const jwt = require('jsonwebtoken');

const checkToken = (req, res, next) => {
    const secretKey = process.env.JWT_SECRET
    const token = req.headers.authorization;
    jwt.verify(token, secretKey, (err, decoded) => {
        if (decoded) {
            next();
       } else {
            res.status(401).send('token_invalid');
        }
    });
};


module.exports = checkToken;
