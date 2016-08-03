'use strict';

const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
});

/* User is trying to login */
router.get('/api/auth', function (req, res, next) {
	/*
	 * @todo Check if user exists: if yes, if password is wrong, tell him,
	 * if the login is wrong, tell him, if everything is wrong, tell him,
	 * otherwise, log him in
	 */
});

module.exports = router;
