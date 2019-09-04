const mongoose = require('mongoose')

const hydrantSchema = new mongoose.Schema(
  {
    "type" : {
      type: String
    },
    "properties" : {
      type: Object
    }
  }
);

hydrantSchema.set('strict', false);
hydrantSchema.set('collection', 'hydrants');

module.exports = mongoose.model('hydrants', hydrantSchema)