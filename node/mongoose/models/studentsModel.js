const {Schema , model} = require('mongoose')

const studentSchema = new Schema({
    name:String,
    rollno:{
        type:Number,
        required:true,
        unique:true 
    },
    // createdAt:Date,
    // updatedAt:Date 
},{timestamps:true})

module.exports = model('student',studentSchema)


