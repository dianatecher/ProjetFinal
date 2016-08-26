'use strict';

const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const Article = mongoose.model('Article');

/*
 *	Articles API
 */

router.param('article', function (req, res, next, id) {
	const query = Article.findById(id);

	query.exec(function (err, article) {
		if (err) {
			return next(err);
		}
		if (!article) {
			return next(new Error("Can't find article"));
		}

		req.article = article;
		return next();
	});
});

/* Create a new article */
router.post('/api/articles', function (req, res, next) {
	const article = new Article(req.body);

	article.save(function (err, article) {
		if (err) {
			return next(err);
		}

		return res.json(article);
	});
});

/* Get all existing articles */
router.get('/api/articles', function (req, res, next) {
	Article.find(function (err, articles) {
		if (err) {
			return next(err);
		}

		return res.json(articles);
	});
});

/* Get an article */
router.get('/api/articles/:article', function (req, res, next) {
	res.json(req.article);
});

/* Update an article */
router.put('/api/articles/:article', function (req, res, next) {
	if (req.body.creation_date) {
		return res.send('Cannot modify the creation date!');
	}

	req.body.modification_date = new Date();

	Article.update(req.article, req.body, function (err, article) {
		if (err) {
			return next(err);
		}

		return res.json(article);
	});
});

/* Delete an article */
router.delete('/api/articles/:article', function (req, res, next) {

	req.article.remove(function (err, article) {
		if (err) {
			return next(err);
		}
		return res.json(article);
	});
});

const User = mongoose.model('User');

/*
 *	General user API
 */

/* Create a new user */
router.post('/api/signup', function (req, res, next) {
	const user = new User(req.body);

	user.save(function (err, user) {
		if (err) {
			return next(err);
		}

		return res.json(user);
	});
});

/* Login a user */
router.post('/api/auth', function (req, res, next) {
	res.send('TRYING TO LOGIN');
});

module.exports = router;
