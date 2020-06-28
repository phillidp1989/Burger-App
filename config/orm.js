const connection = require("./connection");
const util = require("util");

// Promisify connection.query method when querying data from database
const queryAsync = util.promisify(connection.query).bind(connection);

// Setup of the ORM
const orm = {
  // Method to select all records from a table
  selectAll: async tableInput => {
    try {
      const queryString = `SELECT * FROM ${tableInput}`;
      const results = await queryAsync(queryString);            
      return results;
    } catch (err) {
      console.log("ERROR - orm.js - selectAll(): ", err);
    }
 
  // Method to insert a record into a table
},
  insertOne: async function (tableInput, columnName, value) {
    try {
      const queryString = `INSERT INTO ${tableInput} (${columnName}) VALUES ('${value}')`;
      const result = await queryAsync(queryString);
      return result;
    } catch (err) {
      console.log("ERROR - orm.js - insertOne(): ", err);
    }
  },

  // Method to update an existing record in the table
updateOne: async function (tableInput, columnName, newVal, referenceCol, referenceVal) {
  try {
    const queryString = `UPDATE ${tableInput} SET ${columnName} = '${newVal}' WHERE ${referenceCol} = '${referenceVal}'`;
    const result = await queryAsync(queryString);
    return result;
  } catch (err) {
    console.log("ERROR - orm.js - updateOne(): ", err);
  }
},

// Method to delete a record in the table
deleteOne: async function (tableInput, referenceCol, referenceVal) {
  try {
    const queryString = `DELETE FROM ${tableInput} WHERE ${referenceCol} = '${referenceVal}'`
    const result = await queryAsync(queryString);
    return result;
  } catch (err) {
    console.log("ERROR - orm.js - deleteOne(): ", err);
  }
}
};

module.exports = orm;
