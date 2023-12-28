const CameraDetails = require("../Models/Camera");

const getHandler = async (req, res) => {
  const allDBUsers = await CameraDetails.find({});
  return res.json(allDBUsers);
};

const getHandlerById = async (req, res) => {
  const user = await CameraDetails.findById(req.params.id);
  if (!user) return res.status(404).json({ error: "user not found" });
  return res.json(user);
};

const patchHandlerById = async (req, res) => {
  await CameraDetails.findByIdAndUpdate(req.params.id, {
    Latitude_Position: body.Latitude_Position,
    Longnitude_Position: body.Longnitude_Position,
  });
  return res.json({ status: "Success" });
};

const deleteHandlerById = async (req, res) => {
  await CameraDetails.findByIdAndDelete(req.params.id);
  return res.json({ message: "success" });
};
const postHandler = async (req, res) => {
  const body = req.body;
  if (
    !body ||
    !body.Name ||
    !body.Phone_Number ||
    !body.Camera_Company ||
    !body.Camera_Model ||
    !body.Camera_Range ||
    !body.Latitude_Position ||
    !body.Longnitude_Position
  ) {
    return res.status(400).json({ msg: "All Fields are required to fill" });
  }
  const result = await CameraDetails.create({
    Name: body.Name,
    Phone_Number: body.Phone_Number,
    Camera_Company: body.Camera_Company,
    Camera_Model: body.Camera_Model,
    Camera_Range: body.Camera_Range,
    Latitude_Position: body.Latitude_Position,
    Longnitude_Position: body.Longnitude_Position,
  });
  console.log(result);
  return res.status(201).json({ msg: "success" });
};
module.exports = {
  getHandler,
  getHandlerById,
  patchHandlerById,
  deleteHandlerById,
  postHandler,
};
