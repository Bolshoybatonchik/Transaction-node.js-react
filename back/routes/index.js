const express = require('express');
const router = express.Router();
const {checkToken} = require('../services')
const protect = require ('./protected')
const auth = require('./auth');

router.use('/auth', auth);
router.use('/protected', checkToken, protect);


module.exports = router;
