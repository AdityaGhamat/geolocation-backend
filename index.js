const express = require("express");
const app = express();
const userRouter = require("./Routes/Camera");
const { connectMongoDb } = require("./connection");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRouter = require("./Routes/Auth");

//middlewares
app.use(cors());
app.use((req, res, next) => {
  res.setHeader("Cache-Control", "no-store");
  next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
require("dotenv").config();
app.use(cookieParser());

//connection
connectMongoDb();

//routes
app.use("/api/user/camdetails", userRouter);
app.use("/api/auth", authRouter);
app.get("/", (req, res) => {
  res.send("Home Page");
});

//listening to the req
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`server has started at port ${PORT}`);
});
