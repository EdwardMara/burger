var express = require("express");

var router = express.Router();

var burger = require("../models/burger");

router.get("/", function(req,res) {
    burger.selectAll(function(data) {
        var handlebarObject = {
            burgers:data
        };
        console.log(handlebarObject);
        res.render("index", handlebarObject);
    })
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne(["burger_name"],[req.body.burgerName], function(result){
        res.json({id: result.insertId});
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    burger.updateOne(condition, function(result) {
        if(result.changedRows === 0) {
            return res.status(404).end();
        }

        res.status(200).end();
    });
});

module.exports = router;