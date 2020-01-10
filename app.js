require("dotenv").config();
require("./mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
const errorHandler = require("./middlewares/errorHandler");
const routers = require('./routers')

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());
app.use('/', routers)
app.use(errorHandler);

module.exports = app;