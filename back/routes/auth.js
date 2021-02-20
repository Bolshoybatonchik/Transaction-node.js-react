const express = require('express');
const router = express.Router();
const {registerUser, loginUser} = require('../controllers');


const {Users} = require('../models');
const {Transaction} = require('../models');


router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;

