const express = require('express');
const router = express.Router();
const userController = require('../controllers/user_controller');
const passport = require('passport');
const passportLocal = require('../config/passport-local')

router.get('/login',userController.login);
router.get('/signup', userController.signup);
router.post('/create', userController.create);
router.get('/profile/:id',passportLocal.checkAuthenticatedUser,userController.profile);
router.get('/signout',userController.destroySession);
router.post('/createSession', passport.authenticate('local', { failureRedirect: '/users/login' }), userController.createSession);

module.exports = router;