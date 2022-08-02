const express = require('express');
const router = express.Router();

const carController = require('../app/controllers/CarController');

router.get('/create',carController.create);
router.post('/store',carController.store);
router.get('/:id/edit',carController.edit);
router.put('/:id',carController.update);
router.patch('/:id/restore',carController.restore);
router.delete('/:id',carController.destroy);
router.delete('/:id/force',carController.forceDestroy);
router.get('/:slug',carController.show);

module.exports = router;
