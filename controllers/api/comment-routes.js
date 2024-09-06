const router = require("express").Router();
const { Comment } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const commentData = await Comment.findAll();

    const comments = commentData.map((comment) => comment.get({ plain: true }));

    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/post/:postId", async (req, res) => {
  try {
    const commentData = await Comment.findAll({
      where: { postId: req.params.postId },
    });

    const comments = commentData.map((comment) => comment.get({ plain: true }));

    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
