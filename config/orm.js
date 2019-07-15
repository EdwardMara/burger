var connection = require("./connection");

//use selectAll(), insertOne(), and updateOne()
var orm = {
    selectAll: function(cb){
        connection.query ('SELECT * FROM burgers', function(err, res){
            if (err) throw err;
            cb(result);

        });
    },

    insertOne: function(burger_name, cb){
        connection.query('INSERT INTO burgers SET ?',{burger_name: burger_name, devoured: false},
        function(err,result){
            if(err) throw err;
            cb(result);
        });
    },
    
    updateOne: function(burgerID, callback){
        connection.query('UPDATE burgers SET ? WHERE ?', [{devoured: true}, {id:burgerID}],
        function(err,result){
            if (err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;