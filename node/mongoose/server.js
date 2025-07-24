const express = require('express')
const mongoose = require('mongoose')
const app = express()
const studentRouter = require('./routes/studentRoutes.js')
const userRouter = require('./routes/userRoutes.js')


mongoose.connect('mongodb+srv://lead:lead123@cluster0.mk94png.mongodb.net/testing')
.then(()=>console.log('db connected'))
.catch(err=>console.log(err))

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/students',studentRouter)
app.use('/user',userRouter)

app.listen(3000,()=>{
    console.log('server is running on port 3000...')
})




