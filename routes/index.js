const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller')
const cartController = require('../controllers/cart_controller')

router.get('/',homeController.home);
router.get('/about',homeController.about)
router.get('/checkout/:id',cartController.cart);
router.get('/checkout',cartController.goCart);
router.get('/checkout/delete/:id',cartController.delete);
router.use('/users',require('./user'));
router.use('/services',require('./service'));



module.exports = router;