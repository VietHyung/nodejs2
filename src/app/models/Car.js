const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var slug = require('mongoose-slug-generator');
var mongooseDelete = require('mongoose-delete');


const Car = new Schema({
  name: {type: String, maxLength:255},
  desc: {type: String, maxLength:255},
  img: {type: String, maxLength:255},
  slug: {type: String, slug: "name", unique: true},
  videoId: {type: String, maxLength:255},
},{
  timestamps: true,
});

//add plugin
mongoose.plugin(slug);
Car.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: 'all',
});

module.exports = mongoose.model('cars', Car);
