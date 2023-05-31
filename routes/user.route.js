const router = require('express').Router();
const { getUserFromdb, postUserTodb } = require('../controllers/user.controller');

router.get('/:id', getUserFromdb);
router.post('/signup', postUserTodb);

module.exports = router;