// Create MySQL connection
var mysql = require("mysql");
var fs= require("fs");

var secret = fs.readFile("Pass.txt","utf8", function(error, data) {

  if (error) {
    return console.log(error);
  }

  data;
});

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Musketeers33!",
  database: "burger_db"
});


//Export connection to ORM

module.exports = connection;
