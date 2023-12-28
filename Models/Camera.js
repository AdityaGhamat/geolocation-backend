const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    Phone_Number: {
      type: Number,
      required: true,
    },
    Camera_Company: {
      type: String,
      required: true,
    },
    Camera_Model: {
      type: String,
      required: true,
    },
    Camera_Range: {
      type: String,
      required: true,
    },
    Latitude_Position: {
      type: Number,
      required: true,
    },
    Longnitude_Position: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
const CameraDetails = mongoose.model("CameraDetails", userSchema);

module.exports = CameraDetails;
