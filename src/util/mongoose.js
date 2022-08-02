module.exports = {
  multipleMongooseToObject: function(mongoose) {
    return mongooses.map(mongoose.toObject());
  },
  mongooseToObject: function(mongoose) {
    return mongoose ? mongoose.toObject() : mongoose;
  }
}

// this only for use of map -> to object in sitecontroller index
