const {decodedToken} = require('../services');
const {Transaction} = require('../models');
const {User} = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const {sequelize} = require('../models')

module.exports = {
    getUserInfo: async (req, res) => {
        try {
            const {email} = await decodedToken(req);
            const result = await User.findOne({where: {email}});
            const {name, balance} = result;
            if (result) {
                res.json({
                    user_info_token:
                        {
                            name,
                            email: result.email,
                            id: result.id,
                            balance
                        }
                })
            }
        } catch (e) {
            res.status(400).json({
                message: e.message
            })
        }
    },

    getUserList: async (req, res) => {
        try {
            const filter = req.body.filter;
            if (filter == "") {
                res.json([])
            } else {
                const lists = await User.findAll({where: {name: {[Op.like]: filter + '%'}}});
                const userList = lists.map(function (list) {
                    return {name: list.name, id: list.id}
                });
                res.json(userList);
            }
        } catch (e) {
            res.status(400).json({
                message: e.message
            })
        }
    },

    createTransaction: async (req, res) => {
        try {
            const {recipientId, correspondentId, amount, name} = req.body;
            const resultTransaction = await sequelize.transaction(async (t) => {
                const recipient = await User.findOne({where: {id: recipientId}});
                const correspondent = await User.findOne({where: {id: correspondentId}});
                const changeRecipientBalance = Number(recipient.balance) + Number(amount)
                const changeCorrespondentBalance = correspondent.balance - amount;

                if (recipient.id === correspondent.id) {
                        res.status(400).json({
                        message: "It is impossible to send funds to yourself, choose another user",
                    });
                } else {
                    const result = await Transaction.create({
                        recipient_id: recipientId,
                        correspondent_id: correspondentId,
                        recipient_name: name,
                        oldBalance: changeCorrespondentBalance,
                        amount,
                    }, {transaction: t});
                    await User.update({balance: changeCorrespondentBalance}, {
                        where: {
                            id: correspondentId
                        }
                    });
                    await User.update({balance: changeRecipientBalance}, {
                        where: {
                            id: recipientId
                        }
                    });
                    return result;
                }
            });
            res.json(resultTransaction);
        } catch (e) {
            res.status(400).json({
                message: e.message
            })
        }
    },

    getTransactionList: async (req, res) => {
        try {
            const token = decodedToken(req)
            const {userId} = token;
            const transactions = await Transaction.findAll({where: {correspondent_id: userId}});
            const trans_token = transactions.map(function (transaction) {
                return {
                    id: transaction.id,
                    date: transaction.createdAt,
                    name: transaction.recipient_name,
                    amount: transaction.amount,
                    balance: transaction.oldBalance,
                    recipient_id: transaction.recipient_id
                }
            });
            res.json({trans_token})
        } catch (e) {
            res.status(400).json({
                message: e.message
            })
        }
    }
};
