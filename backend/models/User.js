const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 8,
    max: 24,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});
module.exports = mongoose.model("User", UserSchema);
