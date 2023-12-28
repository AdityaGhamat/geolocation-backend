const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Phone_Number: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  Password: {
    type: String,
    required: true,
  },
  token: {
    type: String,
    default: null,
  },
});

const user = mongoose.model("User", profileSchema);
module.exports = user;
