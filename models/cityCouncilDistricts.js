const mongoose = require('mongoose')

const cityCouncilDistrictSchema = new mongoose.Schema(
  {
    "type" : {
      type: String
    },
    "properties" : {
      type: Object
    }
  }
);

cityCouncilDistrictSchema.set('strict', false);
cityCouncilDistrictSchema.set('collection', 'cityCouncilDistricts');

module.exports = mongoose.model('ccds', cityCouncilDistrictSchema)