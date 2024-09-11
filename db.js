//import mongoose
const mongoose = require("mongoose");
require("dotenv").config();


//define url
// const mongoURL = process.env.DB_URL_LOCAL;
const mongoURL = process.env.DB_URL;

// set up connection
mongoose.connect(mongoURL);

// data base obejct
const db = mongoose.connection;

// handling events
db.on("connected", () => {
  console.log("Connected to DB");
});
db.on("error", () => {
  console.log("Connection error");
});
db.on("disconnected", () => {
  console.log("Database disconnected");
});

// export db connection 
module.exports = db;
