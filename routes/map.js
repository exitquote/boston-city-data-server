const express = require('express')
const map = express.Router();
const cors = require('cors')
const mapModel = require('../models/libraries')

/* GET users listing. */
map.get('/', (req, res, next) => {
  
});

//{"type":"FeatureCollection","features":

map.get('/libraries', cors(), (req, res, next) => {
  mapModel.find({}, { type: 1, properties: 1, geometry: 1, _id: 0 })
    .then(libraries => {
      console.log(libraries)
      return libraries.map(library => library.toObject())
    })
    // respond with status 200 and JSON of the examples
    .then(libraries => res.status(200).json({ "type": "FeatureCollection", features: libraries })
    // if an error occurs, pass it to the handler
    .catch(next))
});

// db.crimeData.find({ "properties.DISTRICT": "E18", "properties.INCIDENT_NUMBER" : "I182104939" })
// db.crimeData.find({ "properties.DISTRICT" : "E18", "properties.STREET": /ROSEWOOD/ })
// db.crimeData.find({'properties.DISTRCIT': 'B2'})

map.get('/crimes', (req, res, next) => {
  mapModel.find({'properties.DISTRCIT': 'B2'})
    .then(mountains => {
      return mountains.map(mountain => mountain.toObject())
    })
    // respond with status 200 and JSON of the examples
    .then(mountains => res.status(200).json({ mountains: mountains }))
    // if an error occurs, pass it to the handler
    .catch(next)
});

module.exports = map;
