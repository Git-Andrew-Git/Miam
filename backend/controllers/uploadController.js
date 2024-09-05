const uploadController = require("express").Router();

const multer = require("multer");

// changed from verifyToken to verifyTokenAdmin
const { verifyToken } = require("../middlewares/verifyToken");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.filename);
  },
});

const upload = multer({ storage });

uploadController.post(
  "/image",

  // changed from verifyToken to verifyTokenAdmin
  verifyToken,
  upload.single("image"),
  (req, res) => {
    try {
      return res
        .status(201)
        .json({ msg: "The file has been uploaded successfully" });
    } catch (error) {
      console.error(error.message);
    }
  }
);

module.exports = uploadController;
