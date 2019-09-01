const express = require('express')
const main = express.Router()
const cors = require("cors")

/* GET home page. */
main.get('/', cors(), function(req, res, next) {
  res.json({})
});

module.exports = main;
