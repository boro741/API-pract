const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create geolocation Schema
const GeoSchema = new Schema({
  type: {
    type: String,
    default: "Point"
  },
  coordinates: {
    type: [Number],
    index: "2dsphere"
  }
});
// Create ninja Schema and Model
const NinjaSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name filed is required']
  },
  rank: {
    type: String
  },
  available: {
    type: Boolean,
    default: false
  },
  geometry: GeoSchema
});


// Ninja is name of our model
// ninja is name of our collection in db
// so mongoose gonna create ninjas for us or plularise ninja
const Ninja = mongoose.model('ninja', NinjaSchema);

module.exports = Ninja;
