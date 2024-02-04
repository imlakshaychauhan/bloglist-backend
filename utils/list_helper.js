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

module.exports = { dummy, totalLikes, favoriteBlog };
