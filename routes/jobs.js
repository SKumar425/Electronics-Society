const router = require("express").Router();
const Job = require("../models/Job");

// =========== create a job post =========== //
router.post("/", async (req, res) => {
  const jobPost = new Job(req.body);
  try {
    const savedJobPost = await jobPost.save();
    res.status(200).json(savedJobPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

// =========== get all job posts =========== //
router.get("/", async (req, res) => {
  try {
    const jobPosts = await Job.find();
    res.status(200).json(jobPosts);
  } catch (err) {
    res.status(500).json(err);
  }
});

// =========== delete a job post =========== //
router.delete("/:id", async (req, res) => {
  try {
    const jobPost = await Job.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await jobPost.deleteOne();
      res.status(200).json("the post has been deleted");
    } else {
      res.status(403).json("you can delete only your post");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// =========== get a job post =========== //
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
