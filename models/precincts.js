const mongoose = require('mongoose')

const precinctsSchema = new mongoose.Schema(
  {
    "type" : {
      type: String
    },
    "properties" : {
      type: Object
    }
  }
);

precinctsSchema.set('strict', false);
precinctsSchema.set('collection', 'precincts');

module.exports = mongoose.model('precincts', precinctsSchema)