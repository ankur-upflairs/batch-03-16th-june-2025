let StudentData = require('../data.json')
const Student = require('../models/studentsModel.js')

exports.getAllStudents =async (req,res)=>{
    // console.log(StudentData)
    let students = await Student.find({})
    res.json({success:true,students:students})
}

exports.getStudentById =async (req,res)=>{
    let {id} = req.params
    let student = await Student.findById(id)
    res.json({success:true,student})
}

exports.createStudent =async (req,res)=>{
    let {name,rollno}= req.body
    const student = new Student({name,rollno})
    await student.save()
    res.json({success:true,message:'data created'})
}

exports.updateStudent =async  (req,res)=>{
    let {id} = req.params 
    let {name,rollno} = req.body
    await Student.findByIdAndUpdate(id,{name,rollno})
    res.json({success:true,message:'data updated successfully'})

}

exports.deleteStudent = async (req,res)=>{
    let {id} = req.params
     await Student.findByIdAndDelete(id)
    res.json({success:true,message:`student data with ${id} is   deleted`})
    
}

