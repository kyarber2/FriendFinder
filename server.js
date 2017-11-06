//initialize app
var path = require("path");
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var port = 3000;
var apiRoutes = require("./app/routing/apiRoutes.js");

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

