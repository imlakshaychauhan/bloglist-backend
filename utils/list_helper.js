const _ = require("lodash");

const dummy = (blog) => {
  return 1;
};

const totalLikes = (blogs) => {
  let total = 0;
  blogs.forEach((blog) => {
    total += blog.likes;
  });
  return total;
};

const favoriteBlog = (blogs) => {
  const favourite = blogs.reduce(
    (acc, current_blog) => {
      if (current_blog.likes > acc.likes) return (acc = current_blog);
      return acc;
    },
    { likes: -1 }
  );
  return favourite;
};

const mostBlogs = (blogs) => {
  const authorsCount = _.countBy(blogs, "author");
  const authors = Object.keys(authorsCount);
  max_author = _.maxBy(authors, (author) => authorsCount[author]);

  return {
    author: max_author,
    blogs: authorsCount[max_author],
  };
};

const mostLikes = (blogs) => {
  const authorLikes = _.groupBy(blogs, "author");
  const authors = Object.keys(authorLikes);

  const max_author = _.maxBy(authors, (author) =>
    _.sumBy(authorLikes[author], "likes")
  );

  return {
    author: max_author,
    likes: _.sumBy(authorLikes[max_author], "likes"),
  };
};

module.exports = { dummy, totalLikes, favoriteBlog, mostBlogs, mostLikes };
