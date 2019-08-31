const mongoose = require('mongoose')

const crimesSchema = new mongoose.Schema(
  {
    "type" : {
      type: String
    },
    "properties" : {
      type: Object
    }
  }
);

crimesSchema.set('strict', false);
crimesSchema.set('collection', 'crimeData');

module.exports = mongoose.model('Crimes', crimesSchema)