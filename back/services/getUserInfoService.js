// const decodedToken = require('./decodedToken')
// const {User} = require('../models')
//
//
// module.exports = async (req, res) => {
//     try {
//         const {email} = await decodedToken(req);
//         const result = await User.findOne({where: {email}});
//         const {name, balance} = result;
//         if (result) {
//             res.json({
//                 user_info_token:
//                     {
//                         name,
//                         email:result.email,
//                         id: result.id,
//                         balance
//                     }
//             })
//         }
//     } catch (e) {
//         res.status(400).json({
//             message: e.message
//         })
//     }
// }
//
//
//
