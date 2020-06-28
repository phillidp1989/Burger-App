const mysql = require("mysql");
require("dotenv").config();

// Variables to hold env variables
const username = process.env.USER;
const password = process.env.PASSWORD;

// Setup of MySQL database connection
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: username,
    password: password,
    database: "burgers_db"
});

// Make connection
connection.connect(err => {
    if(err) {
        console.log("ERROR - connection.js - connection.connect: ", err);        
    }
    console.log("connected as id " + connection.threadId);
    
});

module.exports = connection;