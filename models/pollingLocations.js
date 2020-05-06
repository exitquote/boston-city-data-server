const mongoose = require('mongoose')

const pollingLocationsSchema = new mongoose.Schema(
  {
    "type" : {
      type: String
    },
    "properties" : {
      type: Object
    }
  }
);

pollingLocationsSchema.set('strict', false);
pollingLocationsSchema.set('collection', 'pollingLocations');

module.exports = mongoose.model('polls', pollingLocationsSchema)