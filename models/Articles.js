'use strict';

// Require libraries and initiate database connection
const db = require('mongojsom');

const ArticleSchema = new db.Schema({
	comment: [Comment.schema],
	content: String,
	date: { type: Date },
	desc: String,
	title: String,
	user: [User.schema]
});

const Article = new db.Model('Article', ArticleSchema);
