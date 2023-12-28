const mongoose = require("mongoose");
require("dotenv").config();
const connectMongoDb = async () => {
  return mongoose
    .connect(
      "mongodb+srv://adityaghamat01:aditya01@geolocation.mgxzh0a.mongodb.net/"
    )
    .then(() => console.log("MongoDb connection established"))
    .catch((err) => console.log("error while establishing connection", err));
};
module.exports = {
  connectMongoDb,
};
