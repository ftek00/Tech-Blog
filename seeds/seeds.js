const sequelize = require("../config/connections");
const { User, Post, Comment } = require("../models");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate([
    { username: "john_doe", email: "john@example.com" },
    { username: "jane_smith", email: "jane@example.com" },
  ]);

  const posts = await Post.bulkCreate([
    {
      title: "First Post",
      content: "This is the first post.",
      userId: users[0].id,
    },
    {
      title: "Second Post",
      content: "This is the second post.",
      userId: users[1].id,
    },
  ]);

  await Comment.bulkCreate([
    { text: "Great post!", userId: users[1].id, postId: posts[0].id },
    { text: "Nice content!", userId: users[0].id, postId: posts[1].id },
  ]);

  console.log("Database seeded successfully");
};

seedDatabase();
