//TODO: call the ORM functions using burger specific input for the ORM

var orm = require("../config/orm");

var burger = {
    selectAll: function (cb) {
        orm.selectAll(function (res) {
            cb(res);
        });
    },


    insertOne: function (burger_name, cb) {
        orm.insertOne(burger_name, function (res) {
            cb(res);
        });
    },

    updateOne: function(burger_id, cb){
        orm.updateOne(burger_id, function(res){
            cb(res);
        });
    }
};


module.export = burger;