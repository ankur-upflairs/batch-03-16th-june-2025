const express = require('express')

const app = express()
const studentRouter = require('./routes/studentRoutes.js')
const userRouter = require('./routes/userRoutes.js')

// app.use((req,res,next)=>{
// })

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/students',studentRouter)
app.use('/user',userRouter)

app.listen(3000,()=>{
    console.log('server is running on port 3000...')
})

//=========================================
// app.get('/students',(req,res)=>{
//     res.send('all student data')
// })
// app.get('/students/:id',(req,res)=>{
//     res.send('student data')
// })
// app.post('/students',(req,res)=>{
//     res.send('student data created')
// })
// app.put('/students/:id',(req,res)=>{
//     let params = req.params 
//     res.send(`student data with ${params.id} is  updated`)
// })
// app.delete('/students/:id',(req,res)=>{
//     let {id} = req.params 
//     res.send(`student data with ${id} is   deleted`)
// })



// app.listen(3000,()=>{
//     console.log('server is running on port 3000...')
// })




