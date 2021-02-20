// const {User} = require('../models')
// const Sequelize = require('sequelize');
// const Op = Sequelize.Op;
//
// module.exports = async (req, res) => {
//     try {
//         const filter = req.body.filter;
//         const lists = await User.findAll({where: {name: {[Op.like]: filter + '%'}}});
//
//         const userList = lists.map(function (list) {
//             return {name: list.name,id:list.id}
//         });
//         res.json(userList);
//     } catch (e) {
//         res.status(400).json({
//             message: e.message
//         })
//     }
// }