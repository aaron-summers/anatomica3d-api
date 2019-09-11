const express = require('express');
const router = express.Router();
const System = require('../Models/system')
// const mongoose = require('mongoose')

router.get('/', (req, res) => {
    System.find()
    .then(data => {
        // console.log(data)
    res.status(200).json(data)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({error: err})
    })
})

module.exports = router;