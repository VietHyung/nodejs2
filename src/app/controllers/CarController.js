const Car = require('../models/Car.js');
// const {multipleMongooseToObject} = require('../../util/mongoose')

class CarController{

  //get /car/:slug
  show(req, res, next){

    Car.find({slug : req.params.slug}).lean()
      .then(car => {
        res.render('cars/show', {car})
      })
      .catch(next);
  }

  //get
  create(req, res, next){
    res.render('cars/create')
  }

  //get
  edit(req, res, next){
    Car.find({ _id : req.params.id}).lean()
      .then(cars => {
        res.render('cars/edit',{cars})
      })
      .catch(next);
  }

  //post
  store(req, res, next){
    req.body.img = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`
    const car = new Car(req.body);
    car.save()
        .then(() => res.redirect('/me/stored/cars'))
        .catch(error =>{

        })
  }

  //put cars/:id
  update(req, res, next){
    Car.updateOne({ _id : req.params.id}, req.body)
      .then(() => {
        res.redirect('/me/stored/cars')
      })
      .catch(next)
  }

  destroy(req, res, next){
    Car.delete({ _id : req.params.id})
      .then(() => {
        res.redirect('back')
      })
      .catch(next)
  }

  //patch /:id/restore
  restore(req, res, next){
    Car.restore({ _id : req.params.id})
      .then(() => {
        res.redirect('back')
      })
      .catch(next)
  }

  //delete /:id/force
  forceDestroy(req, res, next){
    Car.deleteOne({ _id : req.params.id})
      .then(() => {
        res.redirect('back')
      })
      .catch(next)
  }
}

module.exports = new CarController();
