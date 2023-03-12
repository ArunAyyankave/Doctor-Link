const users = require('../../models/usersModel')

module.exports = {
    getUsers: async (req, res) => {
        try {
            users.find().then(userDatas => {
                res.status(200).json({ userDatas })
            })
        } catch (error) {
            console.log(error.message);
        }
    },
    blockUser: async (req, res) => {
        try {
            await users.updateOne({ _id: req.body.userId }, [{ "$set": { "blockStatus": { "$eq": [false, "$blockStatus"] } } }]);
            res.sendStatus(200)
        } catch (error) {
            console.log(error.message);
        }
    }
}