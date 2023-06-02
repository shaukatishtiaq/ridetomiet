const router = require('express').Router();
const { userController } = require('../controllers');

router.post('/login', userController.loginUser);
router.post('/signup', userController.signupUser);

module.exports = router;