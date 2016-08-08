'use strict';

const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
	res.send('respond with a resource');
});

router.get('/admin', function (req, res, next) {
	res.send('accessing the admin page');
});

router.get('/profile', function (req, res, next) {
	res.send('accessing the profile page');
});

module.exports = router;
