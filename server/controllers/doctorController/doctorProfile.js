const doc = require('../../models/doctorModel');

module.exports = {
    completeprofile: async (req, res) => {
        const _id = req._id
        const { name, mobile, email, spec, qual, exp, fees, place, imageUrl } = req.body
        try {
            await doc.updateOne({ _id }, { $set: { name, mobile, email, qualification: qual, experience: exp, fees, place, imageUrl, specialisation: spec } }).then(response => {
                res.json({ response })
            })
        } catch (error) {
            console.log(error.message)
        }
    },

    addSlot: async (req, res) => {
        try {
            const _id = req._id;
            const { start, end, isAvailable = true } = req.body;

            const doctor = await doc.findById({ _id });
            doctor.timeSlots.push({
                start,
                end,
                isAvailable,
            });

            await doctor.save();

            res.status(201).send('Time slot added successfully');
        } catch (error) {
            console.log(error);
        }
    },

    getSlots: async (req, res) => {
        try {
            const _id = req._id;
            const doctor = await doc.findById(_id);

            const timeSlots = doctor.timeSlots;
            console.log(timeSlots);
            return res.json({ timeSlots: timeSlots });
        } catch (error) {
            console.log(error);
        }
    }
}