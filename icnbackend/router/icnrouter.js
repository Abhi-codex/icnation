const router = require('express').Router();
const Student = require('../models/studentmodel');
const School = require('../models/schoolmodel');
const Industry = require('../models/industriesmodel');
const validator = require('validator');
const Feedback = require('../models/feedbackmodel');
const Blog = require('../models/blogmodel');

router.post('/verifyCer', async (req, res) => {
    const newStudent = new Student({
        issuedate: req.body.issuedate,
        certificatenumber: req.body.certificatenumber
    });
    console.log(newStudent);

    try {
        const savedStudent = await newStudent.save();
        res.status(200).json(savedStudent);
    } catch (error) {
        res.status(500).json(error);
        console.log(error);
    }
});

router.post('/school', async (req, res) => {
    if (validator.isEmail(req.body.email)) {
        const newSchool = new School({
        name: req.body.name,
        location: req.body.location,
        workshop: req.body.workshop,
        email: req.body.email,
        phone: req.body.phone,
        });
        

    try {
        const savedSchool = await newSchool.save();
        res.status(200).json(savedSchool);
    } catch (error) {
        res.status(500).json(error);
        console.log(error);
    }
    } else {
        res.status(504).json("Pass correct data")
    }
    

});

router.post('/industry', async (req, res) => {
    const newSchool = new Industry({
        name: req.body.name,
        location: req.body.location,
        person: req.body.person,
        phone: req.body.phone,
    });

    try {
        const savedSchool = await newSchool.save();
        res.status(200).json(savedSchool);
    } catch (error) {
        res.status(500).json(error);
        console.log(error);
    }

});

router.post('/feedback', async (req, res) => {
    const newFeedback = new Feedback({
        email: req.body.email,
        name: req.body.name,
        phone: req.body.phone,
        feedback: req.body.feedback,
    });

    try {
        const savedFeedback = await newFeedback.save();
        res.status(200).json(savedFeedback);
    } catch (error) {
        res.status(500).json(error);
        console.log(error);
    }

});

router.get("/blogs", async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;