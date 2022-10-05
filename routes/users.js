const express = require('express');

const router = express.Router();
const passport = require('passport');


const usersController = require('../controller/user_controller');

router.get('/signin', usersController.signin);
router.get('/signup', usersController.signup);

router.post('/register',usersController.register);
// router.post('/login', usersController.login)

router.post('/create-session' ,passport.authenticate(
    'local',
    {failureRedirect : '/users/signin'},
     ) , usersController.createSession
);

router.get('/logout',usersController.destroySession);




module.exports = router;