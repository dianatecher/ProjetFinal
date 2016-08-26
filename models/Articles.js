'use strict';

// Require libraries and initiate database connection
const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
	author: { type: String, required: true },
	content: { type: String, unique: true, required: true },
	creation_date: { type: Date, default: new Date(), unique: true },
	description: { type: String, required: true },
	modification_date: { type: Date },
	title: { type: String, unique: true, required: true }
});

mongoose.model('Article', ArticleSchema);
