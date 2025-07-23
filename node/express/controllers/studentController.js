let StudentData = require('../data.json')

//mongodb community edition / mongodb atlas 
//mongodb compass 
//mongo shell 

exports.getAllStudents = (req,res)=>{
    // console.log(StudentData)
    res.json({success:true,students:StudentData})
}

exports.getStudentById = (req,res)=>{
    let {id} = req.params
    let student = StudentData.find(v=>v.id==id)
    res.json({success:true,student})
}

exports.createStudent = (req,res)=>{
    let {name,id,rollno}= req.body
    StudentData.push({name,id,rollno})
    res.json({success:true,message:'data created'})
}

exports.updateStudent = (req,res)=>{
    let {id} = req.params 
    let {name,rollno,id:studentId} = req.body
    let index = StudentData.findIndex(v=>v.id == id)
    StudentData[index].name = name
    StudentData[index].rollno = rollno
    StudentData[index].id = studentId
    res.json({success:true,message:'data updated successfully'})

}

exports.deleteStudent = (req,res)=>{
    let {id} = req.params
    StudentData = StudentData.filter(v=>v.id != id)    
    res.json({success:true,message:`student data with ${id} is   deleted`})
    
}

