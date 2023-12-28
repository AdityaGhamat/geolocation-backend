const mongoose = require("mongoose");
require("dotenv").config();
const connectMongoDb = async () => {
  return mongoose
    .connect(
      "mongodb+srv://adityaghamat01:Aditya01@camera.r3k620o.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => console.log("MongoDb connection established"))
    .catch((err) => console.log("error while establishing connection", err));
};
module.exports = {
  connectMongoDb,
};
