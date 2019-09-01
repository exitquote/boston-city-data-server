const mongoose = require('mongoose')

const landmarksSchema = new mongoose.Schema(
  {
    "type" : {
      type: String
    },
    "properties" : {
      type: Object
    }
  }
);

landmarksSchema.set('strict', false);
landmarksSchema.set('collection', 'landmarks');

module.exports = mongoose.model('landmarks', landmarksSchema)