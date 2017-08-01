var express = require('express');
var redirector = require('./redirect');
var api = require('./api');

var router = express.Router();

router.route('/').get(redirector.getIndex);
router.route('/api/get/strings/:language/:lesson').get(api.getStrings);

module.exports = router;
