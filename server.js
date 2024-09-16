const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const passport = require("./auth");


const app = express();
app.use(express.json());


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.DB_URL_LOCAL);
}


const logRequest = (req, res, next) => {
  console.log(
    `[${new Date().toLocaleString()}] Request made to: ${req.originalUrl}`
  );
  next();
};


app.use(logRequest);

app.use(passport.initialize());
const localAuthMiddleware = passport.authenticate("local", { session: false });

app.get("/", function (req, res) {
  res.send("Welcome to our hotel");
});

const personRoutes = require("./routes/PersonRoutes");
app.use("/person", personRoutes);

const menuRoutes = require("./routes/MenuRoutes");
app.use("/menu", menuRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> {
  console.log(`listening at port ${PORT}`);
}); // listening at port number 3000
