const mongoose = require('mongoose')

const policeDistrictSchema = new mongoose.Schema(
  {
    "type" : {
      type: String
    },
    "properties" : {
      "INCIDENT_NUMBER" : String,
      "OFFENSE_CODE" : String,
      "OFFENSE_CODE_GROUP" : String,
      "OFFENSE_DESCRIPTION" : String,
      "DISTRICT" : String,
      "REPORTING_AREA" : String,
      "SHOOTING" : String,
      "OCCURRED_ON_DATE" : Date,
      "YEAR" : Number,
      "MONTH" : Number,
      "DAY_OF_WEEK" : String,
      "HOUR" : Number,
      "UCR_PART" : String,
      "STREET" : String,
      "Location" : String
    }
  },
  "geometry": {
    type: Object
  }
);

policeDistrictSchema.set('strict', false);
policeDistrictSchema.set('collection', 'policeDistricts');

module.exports = mongoose.model('PDs', policeDistrictSchema)