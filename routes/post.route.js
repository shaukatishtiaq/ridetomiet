const router = require('express').Router();
const { postController } = require('../controllers');

router.post('/create', postController.createPost);


module.exports = router;