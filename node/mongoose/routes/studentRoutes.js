const express = require('express')

const router = express.Router()

const { getAllStudents, getStudentById, createStudent, updateStudent, deleteStudent } = require('../controllers/studentController')
const { auth } = require('../middleware/auth')


router.get('/',getAllStudents)

router.get('/:id',getStudentById)

router.post('/', auth,createStudent)

router.put('/:id',updateStudent)
router.delete('/:id',deleteStudent)

module.exports = router 




