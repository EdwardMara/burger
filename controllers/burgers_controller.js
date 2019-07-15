var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger");

// Create all our routes and set up logic within those routes where required.
router.get('/', function(req, res){
    res.redirect('/index');
});

router.get('/index', function (req, res){
    burger.selectAll(function(data){
        var burgerObject = {
            burgers:data
        };
        res.render('index', burgerObject);
    });
});

router.post('/burger/create', function(req, res){
    burger.insertOne(req.body.burger_name, function(){
        res.redirect('/index');
    });
});

router.post('/burger/eat/:id', function(req,res){
    burger.updateOne(req.params.id, function(){
        res.redirect('/index');

    });
});






module.exports = burger;
