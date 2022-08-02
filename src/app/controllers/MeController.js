const Car = require('../models/Car.js');

class MeController{


  //get /stored/cars
  storedCars(req, res, next){
    Car.find({}).lean()
      .then(cars => res.render('me/stored-cars',{cars}))
      .catch(next)
  }

  //get /me/bin/cars
  binCars(req, res, next){
    Car.findDeleted({}).lean()
      .then(cars => res.render('me/bin-cars',{cars}))
      .catch(next)
  }
}

module.exports = new MeController;
