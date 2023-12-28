const express = require("express");
const router = express.Router();
const {
  getHandler,
  getHandlerById,
  patchHandlerById,
  deleteHandlerById,
  postHandler,
} = require("../Controllers/Camera");

router.route("/").get(getHandler).post(postHandler);

router
  .route("/:id")
  .get(getHandlerById)
  .delete(deleteHandlerById)
  .patch(patchHandlerById);

module.exports = router;
