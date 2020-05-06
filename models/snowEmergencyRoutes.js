const mongoose = require('mongoose')

const snowEmergencyRoutesSchema = new mongoose.Schema(
  {
    "type" : {
      type: String
    },
    "properties" : {
      type: Object
    }
  }
);

snowEmergencyRoutesSchema.set('strict', false);
snowEmergencyRoutesSchema.set('collection', 'snowEmergencyRoutes');

module.exports = mongoose.model('snowroutes', snowEmergencyRoutesSchema)