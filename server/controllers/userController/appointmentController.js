const Doctor = require('../../models/doctorModel');
const Appointment = require('../../models/appointmentModel');

module.exports = {
    bookAppointment: async (req, res) => {
        const { doctorId, timeSlotId } = req.body;
        const userId = req.user;
        try {
            const doctor = await Doctor.findById(doctorId);
            const timeSlotIndex = doctor.timeSlots.findIndex(
                (slot) => slot._id.toString() === timeSlotId
            );

            if (timeSlotIndex === -1) {
                return res.status(404).json({ message: 'Time slot not found' });
            }

            if (!doctor.timeSlots[timeSlotIndex].isAvailable) {
                return res.status(400).json({ message: 'Time slot not available' });
            }

            doctor.timeSlots[timeSlotIndex].isAvailable = false;
            const appointment = new Appointment({
                doctorId,
                timeSlotId,
                userId,
            });
            await Promise.all([doctor.save(), appointment.save()]);

            return res.status(200).json({ message: 'Appointment booked successfully' });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Server error' });
        }
    }
}