const createError = require('http-errors');
const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const indexRouter = require('./routes/index');
const mapRouter = require('./routes/map');
const errorHandler = require('./lib/error_handler')

const db = require('./config/db')
mongoose.Promise = global.Promise
mongoose.connect(db, {
  useMongoClient: true
})

const app = express();

app.use(express.json());

app.use('/', indexRouter);
app.use('/map', mapRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors())

const port = process.env.PORT || 4741

app.listen(port, () => {
  console.log('listening on port ' + port)
})

module.exports = app;
