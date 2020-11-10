const mongoose = require('mongoose');

const FishSchema = mongoose.Schema({
  name: String
});

module.exports = mongoose.model('Fish', FishSchema);