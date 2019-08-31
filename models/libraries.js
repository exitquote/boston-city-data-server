const mongoose = require('mongoose')

const librarySchema = new mongoose.Schema(
  {
    "type" : {
      type: String
    },
    "properties" : {
      type: Object
    }
  }
);

librarySchema.set('strict', false);
librarySchema.set('collection', 'libraries');

module.exports = mongoose.model('Libraries', librarySchema)