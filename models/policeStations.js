const mongoose = require('mongoose')

const policeStationsSchema = new mongoose.Schema(
  {
    "type" : {
      type: String
    },
    "properties" : {
      type: Object
    }
  }
);

policeStationsSchema.set('strict', false);
policeStationsSchema.set('collection', 'policeStations');

module.exports = mongoose.model('policeStations', policeStationsSchema)