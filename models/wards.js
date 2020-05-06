const mongoose = require('mongoose')

const wardSchema = new mongoose.Schema(
  {
    "type" : {
      type: String
    },
    "properties" : {
      type: Object
    }
  }
);

wardSchema.set('strict', false);
wardSchema.set('collection', 'wards');

module.exports = mongoose.model('wards', wardSchema)