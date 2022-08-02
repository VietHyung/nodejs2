const Car = require('../models/Car.js');

class SiteController{

  //get news
  index(req, res, next){

      Car.find({}).lean()
        .then(cars => res.render('home', {cars}))
        .catch(next);

        // Car.find({})
        //   .then(cars => {
        //     res.render('home', {
        //       cars : multipleMongooseToObject(cars),
        //     });
        //   })
        //   .catch(next);
  }

  //get /search/
  search(req, res){
    res.render('search');
  }
}

module.exports = new SiteController;
