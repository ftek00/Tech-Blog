const router = require("express").Router();
const { Post } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll();

    const posts = postData.map((post) => post.get({ plain: true }));

    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);

    if (!postData) {
      res.status(404).json({ message: "Post not found" });
      return;
    }

    const post = postData.get({ plain: true });

    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
