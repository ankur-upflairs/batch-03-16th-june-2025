const express = require('express')
const { register } = require('../controllers/userController')
const router = express.Router()

router.post('/login',(req,res)=>{
    res.send('user login successfull')
})
router.post('/register',register)


module.exports = router 