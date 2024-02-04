const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const config = require("./utils/config");
const logger = require("./utils/logger");
const middleware = require("./utils/middleware");
const blogsRouter = require("./controllers/blogs");

mongoose
  .connect(config.MONGODB_URI)
  .then((res) => {
    logger.info("Database Connected");
  })
  .catch((err) => {
    logger.error(err);
  });

app.use(cors());
app.use(express.json());
app.use(middleware.requestLogger);

app.use("/api/blogs", blogsRouter)

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app