const express = require('express');

const api = express.Router();
api.get('/api', (req,res)=>{
    res.json({"prueba":"x"});
});
module.exports = api;