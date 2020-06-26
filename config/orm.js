const connection = require("./connection");
const util = require("util");

// Promisify connection.query method when querying data from database
const queryAsync = util.promisify(connection.query).bind(connection);

// Setup of the ORM
const orm = {
  selectAll: async function (tableInput) {
    try {
      const queryString = `SELECT * FROM ${tableInput}`;
      const results = await queryAsync(queryString);            
      return results;
    } catch (err) {
      console.log("ERROR - orm.js - selectAll(): ", err);
    }
 
  
},
  insertOne: async function (tableInput, columnName, value) {
    try {
      const queryString = `INSERT INTO ${tableInput} (${columnName}) VALUES ('${value}')`;
      const result = await queryAsync(queryString);
      console.log(result);
    } catch (err) {
      console.log("ERROR - orm.js - insertOne(): ", err);
    }
  },
updateOne: async function (tableInput, columnName, newVal, referenceCol, referenceVal) {
  try {
    const queryString = `UPDATE ${tableInput} SET ${columnName} = '${newVal}' WHERE ${referenceCol} = '${referenceVal}'`;
    const result = await queryAsync(queryString);
    console.log(result);
  } catch (err) {
    console.log("ERROR - orm.js - updateOne(): ", err);
  }
},
};

module.exports = orm;
