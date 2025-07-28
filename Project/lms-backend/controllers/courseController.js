const Courses =  require('../Models/courseModel')


exports.getAllCourses =async  (req,res) =>{
    let courses = await Courses.find({})
    res.json({success:true, courses})
}

