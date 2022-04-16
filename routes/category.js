const express = require('express');

const router = express.Router();
const passport = require('passport');


const categoryController = require('../controller/category_controller');

router.get('/houseplant' ,passport.checkAuthentication, categoryController.houseplant); 
router.post('/save' , categoryController.save);

router.use('/users', require('./users'));
router.use('/cart', require('./cart'));

module.exports = router;