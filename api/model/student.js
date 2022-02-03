const mongoose = require("mongoose")


const studentSchema = new mongoose.Schema({
    id:mongoose.Schema.Types.ObjectId,
    name:String,
    email:String,
    age: Number,

})

module.exports = mongoose.model('Student', studentSchema)