const express = require('express')
const router = express.Router()

router.post('/login',(req,res)=>{
    res.send('user login successfull')
})
router.post('/register',(req,res)=>{
    res.send('user sign up success')
})


module.exports = router 