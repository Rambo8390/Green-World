const express = require('express');

const router = express.Router();
const passport = require('passport');
const cartController = require('../controller/cart_controller')

router.get('/houseplant/:id/:userid',cartController.housecart);
router.get('/houseplant',cartController.housecart1);
router.get('/carts/:userid',cartController.carts);
router.get('/increase/:id', cartController.increase);
router.get('/decrease/:id', cartController.decrease);
router.get('/remove/:id/:userid',cartController.remove)

module.exports = router;