const mongoose = require('mongoose');

const FishSchema = mongoose.Schema({
  name: String,
  rating: String,
  risk: Object
});

module.exports = mongoose.model('Fish', FishSchema);