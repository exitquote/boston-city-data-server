const mongoose = require('mongoose')

const policeDistrictSchema = new mongoose.Schema(
  {
    "type" : {
      type: String
    },
    "properties" : {
      type: Object
    }
  }
);

policeDistrictSchema.set('strict', false);
policeDistrictSchema.set('collection', 'policeDistricts');

module.exports = mongoose.model('PDs', policeDistrictSchema)