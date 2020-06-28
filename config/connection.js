const mysql = require("mysql");
require("dotenv").config();
let connection;

// Variables to hold env variables
const username = process.env.USER;
const password = process.env.PASSWORD;

// Setup of MySQL database connection or connection to JawsDB to deploy on Heroku
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: username,
        password: password,
        database: "burgers_db"
    });
}

// Make connection
connection.connect(err => {
    if(err) {
        console.log("ERROR - connection.js - connection.connect: ", err);        
    }
    console.log("connected as id " + connection.threadId);
    
});

module.exports = connection;