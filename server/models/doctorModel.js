const mongoose = require('mongoose');

const DoctorSchema = new mongoose.Schema({
    name: String,
    mobile: String,
    password: String,
    image: String,
    imageUrl:String,
    email:String,
    specialisation:String,
    qualification:String,
    experience:String,
    fees:Number,
    place:String,
    approved: {
        type:Boolean,
        default:false
    },
    blockStatus: {
        type:Boolean,
        default:false
    }

})

module.exports = mongoose.model('doctors',DoctorSchema)