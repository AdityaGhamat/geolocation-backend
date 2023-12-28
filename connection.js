const mongoose = require("mongoose");
require("dotenv").config();
const connectMongoDb = async () => {
  return mongoose
    .connect(process.env.MONGODB_ADDRESS)
    .then(() => console.log("MongoDb connection established"))
    .catch((err) => console.log("error while establishing connection", err));
};
module.exports = {
  connectMongoDb,
};
