let express = require('express')
//if you grab a directory (like /models), it will, by default
//grab the file 'index' and whatever it exports (which here is the api database)
let db = require('../models')
let Student = db.Student //student model

let router = express.Router()

//request to students will cause this functiont to run
router.get('/students', function(req, res, next) {
    Student.findAll().then( students => { //then bc it's a promise
        //when the promise resolves it will provide an array of students
        return res.json(students) //must have return when there's a promise
    })
})

router.post('/students', function(req, res, next) {
    Student.create( req.body ).then(data => {//contains any json that vue client has sent in the request
        return res.status(201).send('ok - created!') //200 level requests are usually positive/successful
        //201 is for something being created successfully
    })
})

module.exports = router