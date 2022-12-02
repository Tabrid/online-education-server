const express = require('express');
const cors = require('cors');

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());


const courses = require('./Data/courses.json');

// get all courses 
app.get('/courses', (req, res) => {
    res.send(courses);
})
// geet single course by course_id 
app.get('/course/:course_id', (req, res) => {
    console.log(req.params.course_id);
    const course_id = parseInt(req.params.course_id);
    const course = courses.find( c => c.id == course_id)
    res.send(course);
})

app.get('/', (req, res) => {
    res.send("Fun Code server is running");
})



app.listen(port, () => {
 console.log(`Fun Code Running On Port ${port}`);
})