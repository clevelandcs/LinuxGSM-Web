//controller.js - Main routing module.
var path = require('path');
var express = require('express');
var pages = express.Router();

pages.get('/about', function(req,res){
    res.send('About this manager');
});
module.exports.pages = pages;