const express = require('express');
const router = express.Router();
const User = require('../models/User.model')



router.post('/list', (req, res, next) => {
    User.findByIdAndUpdate(req.user._id, {
            $push: {
                memory: req.body
            }
        }, {
            new: true
        })
        .then((user) => res.json({
            user,
            message: "actualizado"
        }))
        .catch(err => console.log(err))
})

router.get('/find', (req, res, next) => {
    User.findById(req.user._id)
        .then(user => console.log(user.memory))
        .catch(err => console.log(err))
})

router.get('/delete', (req, res, next) => {
    User.findByIdAndUpdate(req.user._id, {memory: []})
        .then(user => console.log(user.memory))
        .catch(err => console.log(err))
})

module.exports = router;