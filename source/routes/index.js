const express = require('express');
const getData = require('../data.json');
const router = express.Router();
router.get('/', (req,res)=>{
    res.render('index', getData);
})

module.exports = router;