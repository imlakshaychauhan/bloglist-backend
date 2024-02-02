const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const Blog = require("./models/blog");
const config = require("./utils/config");
const logger = require("./utils/logger");

app.use(cors());
app.use(express.json());

mongoose
  .connect(config.MONGODB_URI)
  .then((res) => {
    logger.info("Database Connected");
  })
  .catch((err) => {
    logger.error(err);
  });

app.get("/api/blogs", (request, response) => {
  Blog.find({}).then((blogs) => {
    response.json(blogs);
  });
});

app.post("/api/blogs", (request, response) => {
  const blog = new Blog(request.body);
  blog.save().then((result) => {
    response.status(201).json(result);
  });
});

const PORT = config.PORT || 3003;
app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});