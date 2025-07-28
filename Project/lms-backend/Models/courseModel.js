const {Schema , model} = require('mongoose')
//  {
//       id: 1,
//       title: "React Fundamentals",
//       instructor: "John Doe",
//       description: "Learn the basics of React including components, state, and props.",
//       students: 45,
//       duration: "8 weeks",
//       level: "Beginner",
//       image: "https://via.placeholder.com/300x200/007bff/ffffff?text=React"
//     },

const courseSchema = new Schema({
    title: {
        type:String,
        required:true
    },
    instructor: {
        type:String,
        required:true
    },
    description:String ,
    students: Number,
    duration:String,
    level:{
        type :String,
        enum:["Beginner","Advanced"]
    },
    image:String

})

module.exports = model('Course',courseSchema)
