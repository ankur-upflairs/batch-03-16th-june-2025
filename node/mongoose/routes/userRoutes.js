const express = require('express')
const { register, login } = require('../controllers/userController')
const router = express.Router()

router.post('/login',login)
router.post('/register',register)


module.exports = router 