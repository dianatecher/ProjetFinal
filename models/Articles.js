'use strict';

// Require libraries and initiate database connection
const db = require('mongojsom');

const ArticleSchema = new db.Schema({
	content: String,
	date: { type: Date},
	user: [User.schema]
});

const Article = new db.Model('Article', ArticleSchema);
