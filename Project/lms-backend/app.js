var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose')
var dotenv = require('dotenv')
var cors = require('cors')

dotenv.config()
mongoose.connect(process.env.DB_URI)
.then(()=>console.log('db connected'))
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var courseRouter = require('./routes/course')
var app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/courses',courseRouter)

module.exports = app;

/*
[
    {
      id: 1,
      title: "React Fundamentals",
      instructor: "John Doe",
      description: "Learn the basics of React including components, state, and props.",
      students: 45,
      duration: "8 weeks",
      level: "Beginner",
      image: "https://campus.w3schools.com/cdn/shop/files/ExcelMySQLPostgreSQLDSANode.jsGitAWSCloudCVueDjango_3_700x700.png?v=1735897160"
    },
    {
      id: 2,
      title: "Advanced JavaScript",
      instructor: "Jane Smith",
      description: "Deep dive into ES6+, async programming, and advanced concepts.",
      students: 32,
      duration: "10 weeks",
      level: "Advanced",
      image: "https://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2019/12/Advanced-JavaScript-Tutorial-1.jpg"
    }
]
    */
