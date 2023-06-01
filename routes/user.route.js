const router = require('express').Router();
const { userController } = require('../controllers');

router.get('/:id', userController.getUserFromdb);
router.post('/signup', userController.postUserTodb);

module.exports = router;