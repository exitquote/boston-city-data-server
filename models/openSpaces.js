const mongoose = require('mongoose')

const openSpacesSchema = new mongoose.Schema(
  {
    "type" : {
      type: String
    },
    "properties" : {
      type: Object
    }
  }
);

openSpacesSchema.set('strict', false);
openSpacesSchema.set('collection', 'openSpace');

module.exports = mongoose.model('openSpaces', openSpacesSchema)