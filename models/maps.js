const mongoose = require('mongoose')

const mapInterface = new mongoose.Connection
mapInterface.useDb('bostonCityData')
//bostonCityData.collectionNames

module.exports = mongoose.model('Maps', mapInterface)