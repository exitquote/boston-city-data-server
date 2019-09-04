const mongoose = require('mongoose')

const fireDistrictsSchema = new mongoose.Schema(
  {
    "type" : {
      type: String
    },
    "properties" : {
      type: Object
    }
  }
);

fireDistrictsSchema.set('strict', false);
fireDistrictsSchema.set('collection', 'fireDistricts');

module.exports = mongoose.model('firedistricts', fireDistrictsSchema)