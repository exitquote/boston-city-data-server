const mongoose = require('mongoose')

const schoolSchema = new mongoose.Schema(
  {
    "type" : {
      type: String
    },
    "properties" : {
      type: Object
    }
  }
);

schoolSchema.set('strict', false);
schoolSchema.set('collection', 'publicSchools');

module.exports = mongoose.model('Schools', schoolSchema) 