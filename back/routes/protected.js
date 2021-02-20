const express = require('express');
const router = express.Router();
// const getUserInfo = require('../services/getUserInfoService')
// const getUserList = require('../services/getUserListInfoService')
// const createTransaction = require('../services/creatTransactionService')
const {getUserInfo, getUserList, createTransaction, getTransactionList} = require('../controllers')
const getTransactionsList = require('../services/creatTransactionService')


router.get('/user-info', getUserInfo);
router.post('/users/list', getUserList);
router.post('/transactions', createTransaction);
router.get('/transactions', getTransactionList);

module.exports = router;

