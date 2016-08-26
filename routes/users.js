'use strict';

const express = require('express');
const router = express.Router();

router.get('/admin', function (req, res, next) {
	res.send('accessing the admin page');
});

module.exports = router;
