const mongoose = require('mongoose')

const trashCollectionDaysSchema = new mongoose.Schema(
  {
    "type" : {
      type: String
    },
    "properties" : {
      type: Object
    }
  }
);

trashCollectionDaysSchema.set('strict', false);
trashCollectionDaysSchema.set('collection', 'trashCollectionDays');

module.exports = mongoose.model('trash', trashCollectionDaysSchema)