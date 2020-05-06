const mongoose = require('mongoose')

const fireBoxLocationsSchema = new mongoose.Schema(
  {
    "type" : {
      type: String
    },
    "properties" : {
      type: Object
    }
  }
);

fireBoxLocationsSchema.set('strict', false);
fireBoxLocationsSchema.set('collection', 'pollingLocations');

module.exports = mongoose.model('fireboxes', fireBoxLocationsSchema)