const express = require("express");
const app = express();
const db = require("./db");
require("dotenv").config();


const bodyParser = require("body-parser");
app.use(bodyParser.json());
//bodyParser.json() -> parse the JSON data from the request body and converts it into a JS object, which is then store in req.body

app.get("/", function (req, res) {
  // path and callback function
  res.send("Welcome to our hotel");
});

// app.get("/student", function (req, res) {
//   let student = {
//     name: "Mayank",
//     id: 201,
//     course: "CSE",
//   };
//   console.log("student executed");
//   res.send(student);
// });


const personRoutes = require("./routes/PersonRoutes");
app.use('/person', personRoutes);

const menuRoutes = require("./routes/MenuRoutes");
app.use('/menu', menuRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT); // listening at port number 3000
