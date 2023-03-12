const doc = require('../../models/doctorModel');

module.exports = {
    completeprofile: async (req, res) => {
        const { _id } = req.params
        const { name, mobile, email, spec, qual, exp, fees, place, imageUrl } = req.body
        try {
            await doc.updateOne({ _id }, { $set: { name, mobile, qualification: qual, experience: exp, fees, place, imageUrl, specialisation: spec } }).then(response => {
                res.json({ response })
            })

        } catch (error) {
            console.log(error.message)
        }
    }
}