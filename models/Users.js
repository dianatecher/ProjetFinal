'use strict';

// Require libraries and initiate database connection
const db = require('mongojsom');

const UserSchema = new db.Schema({
	admin: Boolean,
	username: { type: String, lowercase: true, unique: true },
	password: String
});

const User = new db.Model('User', UserSchema);
