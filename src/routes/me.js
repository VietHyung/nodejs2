const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');

router.get('/stored/cars',meController.storedCars);
router.get('/bin/cars',meController.binCars);
module.exports = router;
