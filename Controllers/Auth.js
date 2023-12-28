const User = require("../Models/Auth");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const loginHandler = async (req, res) => {
  try {
    const { Email, Password } = req.body;
    if (!(Email && Password)) {
      res.status(400).send({ message: "Any Field Should Not Be Empty" });
    }
    const isUser = await User.findOne({ Email });
    if (isUser && (await bcrypt.compare(Password, isUser.Password))) {
      const token = jwt.sign({ id: isUser._id }, process.env.SECRET_KEY, {
        expiresIn: "2h",
      });
      isUser.token = token;
      isUser.Password = undefined;

      //cookie section
      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
        secure: true,
      };

      console.log("User logged in successfully: ", isUser);
      res.status(200).cookie("token", token, options).json({
        success: true,
        token,
        isUser,
      });
    } else {
      res.status(401).send({ error: "Invalid credentials" });
    }
  } catch (error) {
    console.error("Eror while login" + error);
    res.status(500).send({ error: "Internal server error" });
  }
};

const registerHandler = async (req, res) => {
  try {
    const { Name, Phone_Number, Email, Password } = req.body;
    if (!(Name && Phone_Number && Email && Password)) {
      return res.status(400).send({ message: "Fields are empty" });
    }
    const existingUser = await User.findOne({ Email });
    if (existingUser) {
      return res.status(400).send("User already registered with this email");
    }
    const encryptedPassword = await bcrypt.hash(Password, 10);
    const userData = await User.create({
      Name,
      Phone_Number,
      Email,
      Password: encryptedPassword,
    });
    const token = jwt.sign(
      { id: userData._id, Email },
      process.env.SECRET_KEY,
      {
        expiresIn: "2h",
      }
    );
    userData.token = token;
    userData.Password = undefined;
    res.status(200).json(userData);
    console.log("User registered successfully : ", userData);
  } catch (error) {
    console.error("Error during registration: ", error);
    res.status(500).send({ error: "Internal server error" });
  }
};
module.exports = { registerHandler, loginHandler };
