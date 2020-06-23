const { connection } = require("./config/connection");

// Promisify connection.query method when querying data from database
const queryAsync = util.promisify(connection.query).bind(connection);

// Setup of the ORM
const orm = {
  selectAll: async function (tableInput) {
    try {
      const queryString = `SELECT * FROM ${tableInput}`;
      await queryAsync(queryString);
    } catch (err) {
      console.log("ERROR - orm.js - selectAll(): ", err);
    }
  },
  insertOne: async function (tableInput, columnName, value) {
    try {
      const queryString = `INSERT INTO ?? (??) VALUES (?)`;
      await queryAsync(queryString, [tableInput, columnName, value]);
    } catch (err) {
      console.log("ERROR - orm.js - insertOne(): ", err);
    }
  },
  updateOne: async function (tableInput, columnName, newVal, referenceCol, referenceVal) {
    try {
      const queryString = `UPDATE ?? SET ?? = ? WHERE ?? = ?`;
      await queryAsync(queryString, [tableInput, columnName, newVal, referenceCol, referenceVal]);
    } catch (err) {
      console.log("ERROR - orm.js - insertOne(): ", err);
    }
  },

};

module.exports = orm;
