const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/service_controller')

router.get('/',serviceController.service);
router.post('/create',serviceController.create);

module.exports = router;