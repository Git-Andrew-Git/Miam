const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const authController = require("./controllers/authController");
const productController = require("./controllers/productController");
const uploadController = require("./controllers/uploadController");
const app = express();

// express json above middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/images", express.static("public/images/"));
app.use("/auth", authController);
app.use("/product", productController);
app.use("/upload", uploadController);

//  connect our db, server
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log("connect to db");
  app.listen(process.env.PORT, () => {
    console.log(`Server is started, Listen to port`);
  });
});
