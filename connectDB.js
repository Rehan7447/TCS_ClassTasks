var mongoose = require("mongoose");

const connection = mongoose.connect("mongodb://localhost:27017/lms");
connection.then(
  (db) => {
    consol.log("Connected to DB");
  },
  (err) => {
    console.log("connection failed", err);
  }
);

module.exports = connection;