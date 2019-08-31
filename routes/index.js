const express = require('express')
const main = express.Router()
const cors = require("cors")

/* GET home page. */
main.get('/', cors(), function(req, res, next) {
  res.json(
    [
    {
        id: 1,
        title: "Alice's Adventures in Wonderland",
        author: "Charles Lutwidge Dodgson"
    },
    {
        id: 2,
        title: "Einstein's Dreams",
        author: "Alan Lightman"
    }
    ]
  )
});

module.exports = main;
