require("./models/db");

const express = require("express");

const path = require("path");
const pug=require('pug')
const handleBars = require("handlebars");

const exphbs = require("express-handlebars");
const exppug = require("express-pug");

const { allowInsecurePrototypeAccess} = require("@handlebars/allow-prototype-access");

const bodyparser = require("body-parser");

const BookController = require("./controller/BookController");
var app = express();

app.use(bodyparser.urlencoded({ extended: true }));

app.use(bodyparser.json());

app.get("/", (req, res) => {

  res.send(`

  <h2>Book inventory management system</h2>

  <h3>Click here to  <b> <a href="/student/list">view </a> </b>all book of liberary</h3>`);

});

app.set("views", path.join(__dirname, "/views/"));

app.engine(

  "pug",

  exphbs({

    handlebars: allowInsecurePrototypeAccess(handleBars),

    extname: "pug",

    defaultLayout: "mainLayout",

    layoutsDir: __dirname + "/views/layouts/"

  })

);

app.set("view engine", "pug");

app.listen(5000, () => {

  console.log("Express server started at port: 5000");

});

app.use("/Student", BookController);

