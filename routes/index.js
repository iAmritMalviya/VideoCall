var express = require('express');
var router = express.Router();
const controllers = require('../controllers/index');

/* GET home page. */
router.get('/',  controllers.get);
router.get('/:roomId',  controllers.room);

module.exports = router;
