// const {Transaction} = require('../models')
// const {User} = require('../models')
//
// module.exports = async (req, res) => {
//     try {
//         const {recipientId, correspondentId, amount} = req.body;
//         const result = await Transaction.create({
//             recipient_id: recipientId,
//             correspondent_id: correspondentId,
//             amount,
//         });
//         res.json(result)
//     } catch (e) {
//         console.log("eee =============>", e)
//         res.status(400).json({
//             message: e.message
//         })
//     }
// }
