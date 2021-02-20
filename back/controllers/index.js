const {registerUser, loginUser} = require('./authController');
const {getUserInfo,getUserList,createTransaction,getTransactionList} =require('./protectedController')

module.exports = {registerUser, loginUser,getUserInfo,getUserList,createTransaction,getTransactionList}