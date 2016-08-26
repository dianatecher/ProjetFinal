'use strict';

// Require libraries and initiate database connection
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	admin: Boolean,
	username: { type: String, lowercase: true, unique: true },
	password: String
});

mongoose.model('User', UserSchema);
