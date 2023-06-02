const router = require('express').Router();
const { userController } = require('../controllers');

router.post('/login', userController.getUserFromdb);
router.post('/signup', userController.postUserTodb);

module.exports = router;