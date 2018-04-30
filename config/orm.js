var connection = require("./connection.js");

var orm = {
  selectAll: function (cb) {
    var queryString = "SELECT * FROM burgers ";

    console.log(queryString);

    connection.query(queryString, function (err, result) {
      if (err) throw err;
      cb(result);
      console.log(result);
    });
  },

  insertOne: function (tableInsert, cb) {
    var queryString = "INSERT INTO burgers (name) VALUES ?";

    console.log(queryString);

    connection.query(queryString, [tableInsert], function (err, result) {
      if (err) throw err;
      cb(result);
      console.log("record added");
    });
  },

  updateOne: function (updateWhere, cb) {
    var queryString = "UPDATE burgers SET devoured = true WHERE burger_name = ?";
    
    console.log(queryString);

    connection.query(queryString, [updateWhere], function (err, result) {
      if (err) throw err;
      cb(result);
      console.log("record updated");
    });
  },
};

  module.exports = orm;
