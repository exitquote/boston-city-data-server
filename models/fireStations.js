const mongoose = require('mongoose')

const fireStationsSchema = new mongoose.Schema(
  {
    "type" : {
      type: String
    },
    "properties" : {
      type: Object
    }
  }
);

fireStationsSchema.set('strict', false);
fireStationsSchema.set('collection', 'fireStations');

module.exports = mongoose.model('firestations', fireStationsSchema)