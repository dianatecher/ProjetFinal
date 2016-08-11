'use strict';

// Require libraries and initiate database connection
const db = require('mongojsom');

const CommentSchema = new db.Schema({
	content: String,
	date: { type: Date },
	user: [User.schema]
});

const Comment = new db.Model('Comment', CommentSchema);
