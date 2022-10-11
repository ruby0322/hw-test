const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  avatar: String,
});

const Users = mongoose.model('User', userSchema);

module.exports = Users;
