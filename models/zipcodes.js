const mongoose = require('mongoose')

const zipcodeSchema = new mongoose.Schema(
  {
    "type" : {
      type: String
    },
    "properties" : {
      type: Object
    }
  }
);

zipcodeSchema.set('strict', false);
zipcodeSchema.set('collection', 'zipcodes');

module.exports = mongoose.model('Zipcodes', zipcodeSchema)