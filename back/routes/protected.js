const express = require('express');
const router = express.Router();
const {getUserInfo, getUserList, createTransaction, getTransactionList} = require('../controllers')


router.get('/user-info', getUserInfo);
router.post('/users/list', getUserList);
router.post('/transactions', createTransaction);
router.get('/transactions', getTransactionList);

module.exports = router;

