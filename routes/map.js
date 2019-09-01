const express = require('express')
const map = express.Router();
const cors = require('cors')
const libModel = require('../models/libraries')
const crimeModel = require('../models/crimes')
const zipModel = require('../models/zipcodes')
const pdModel = require('../models/policeDistricts')
const schoolModel = require('../models/schools')
const neighborhoodModel = require('../models/neighborhoods')
const landmarkModel = require('../models/landmarks')
const openSpaceModel = require('../models/openSpaces')

const collections = {}


map.get('/', cors(), (req, res, next) => {
  var test = {
    "Collections": [
      //'crimes',
      'libraries',
      'zipcodes',
      'police_districts',
    ]
  }
  res.status(200).json(test)
});

//{"type":"FeatureCollection","features":

map.get('/libraries', cors(), (req, res, next) => {
  libModel.find({}, { type: 1, properties: 1, geometry: 1, _id: 0 })
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

map.get('/crimes', cors(), (req, res, next) => {
  crimeModel.find({'properties.DISTRCIT': 'B2'})
    .then(crimes => {
      return crimes.map(crime => crime.toObject())
    })
    // respond with status 200 and JSON of the examples
    .then(crimes => res.status(200).json({ "type": "FeatureCollection", features: crimes })
    // if an error occurs, pass it to the handler
    .catch(next))
});

map.get('/zipcodes', cors(), (req, res, next) => {
  zipModel.find({}, { type: 1, properties: 1, geometry: 1, _id: 0 })
    .then(zipcodes => {
      return zipcodes.map(zipcode => zipcode.toObject())
    })
    // respond with status 200 and JSON of the examples
    .then(zipcodes => res.status(200).json({ "type": "FeatureCollection", features: zipcodes}))
    // if an error occurs, pass it to the handler
    .catch(next)
});

map.get('/police_districts', cors(), (req, res, next) => {
  pdModel.find({}, { type: 1, properties: 1, geometry: 1, _id: 0 })
    .then(pds => {
      return pds.map(pd => pd.toObject())
    })
    // respond with status 200 and JSON of the examples
    .then(pds => res.status(200).json({ "type": "FeatureCollection", features: pds}))
    // if an error occurs, pass it to the handler
    .catch(next)
});

map.get('/public_schools', cors(), (req, res, next) => {
  schoolModel.find({}, { type: 1, properties: 1, geometry: 1, _id: 0 })
    .then(schools => {
      return schools.map(school => school.toObject())
    })
    // respond with status 200 and JSON of the examples
    .then(schools => res.status(200).json({ "type": "FeatureCollection", features: schools}))
    // if an error occurs, pass it to the handler
    .catch(next)
});

map.get('/neighborhoods', cors(), (req, res, next) => {
  neighborhoodModel.find({}, { type: 1, properties: 1, geometry: 1, _id: 0 })
    .then(neighborhoods => {
      return neighborhoods.map(neighborhood => neighborhood.toObject())
    })
    // respond with status 200 and JSON of the examples
    .then(neighborhoods => res.status(200).json({ "type": "FeatureCollection", features: neighborhoods}))
    // if an error occurs, pass it to the handler
    .catch(next)
});

map.get('/landmarks', cors(), (req, res, next) => {
  landmarkModel.find({}, { type: 1, properties: 1, geometry: 1, _id: 0 })
    .then(landmarks => {
      return landmarks.map(landmark => landmark.toObject())
    })
    // respond with status 200 and JSON of the examples
    .then(landmarks => res.status(200).json({ "type": "FeatureCollection", features: landmarks}))
    // if an error occurs, pass it to the handler
    .catch(next)
});

map.get('/openspaces', cors(), (req, res, next) => {
  openSpaceModel.find({}, { type: 1, properties: 1, geometry: 1, _id: 0 })
    .then(openspaces => {
      return openspaces.map(openspace => openspace.toObject())
    })
    // respond with status 200 and JSON of the examples
    .then(openspaces => res.status(200).json({ "type": "FeatureCollection", features: openspaces}))
    // if an error occurs, pass it to the handler
    .catch(next)
});

module.exports = map;
