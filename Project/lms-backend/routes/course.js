var express = require('express');
const { getAllCourses } = require('../controllers/courseController');
var router = express.Router();

/* GET users listing. */
router.get('/', getAllCourses);

module.exports = router;