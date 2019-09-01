const mongoose = require('mongoose')

const neighborhoodsSchema = new mongoose.Schema(
  {
    "type" : {
      type: String
    },
    "properties" : {
      type: Object
    }
  }
);

neighborhoodsSchema.set('strict', false);
neighborhoodsSchema.set('collection', 'neighborhoods');

module.exports = mongoose.model('Neighborhoods', neighborhoodsSchema)