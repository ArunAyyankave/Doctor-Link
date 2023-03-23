const doc = require('../../models/doctorModel');
const Appointment = require('../../models/appointmentModel');
const mongoose = require('mongoose')

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
            console.log(jjjjjjjjjjjjj);
            const _id = req._id;
            const doctor = await doc.findById(_id);

            const timeSlots = doctor.timeSlots;
            console.log(timeSlots);
            return res.json({ timeSlots: timeSlots });
        } catch (error) {
            console.log(error);
        }
    },

    getAps: async (req, res) => {
        try {
            const doctorId = req._id;

            const appointments = await Appointment.aggregate([
                {
                    $match: {
                        doctorId: mongoose.Types.ObjectId(doctorId),
                    },
                },
                {
                    $lookup: {
                        from: "users",
                        localField: "userId",
                        foreignField: "_id",
                        as: "user",
                    },
                },
                {
                    $lookup: {
                        from: "doctors",
                        localField: "doctorId",
                        foreignField: "_id",
                        as: "doctor",
                    },
                },
                {
                    $unwind: "$user",
                },
                {
                    $unwind: "$doctor",
                },
                {
                    $addFields: {
                        timeSlot: {
                            $filter: {
                                input: "$doctor.timeSlots",
                                as: "timeSlot",
                                cond: {
                                    $eq: ["$$timeSlot._id", "$timeSlotId"],
                                },
                            },
                        },
                        timeSlotStart: { $arrayElemAt: ["$doctor.timeSlots.start", 0] },
                        timeSlotEnd: { $arrayElemAt: ["$doctor.timeSlots.end", 0] },
                    },
                },
                {
                    $project: {
                        _id: 1,
                        appointmentDate: 1,
                        timeSlotStart: 1,
                        timeSlotEnd: 1,
                        "user.name": 1,
                        "user.mobile": 1,
                    },
                },
            ]);

            res.json(appointments);
        } catch (error) {
            console.log(error.message);
        }
    }
}