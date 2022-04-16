const express = require('express');

const router = express.Router();
const passport = require('passport');

const PaymentController = require('../controller/payment_controller');

router.get('/pay/:price',PaymentController.pay);
// router.post('/payment', PaymentController.payment);


module.exports = router;