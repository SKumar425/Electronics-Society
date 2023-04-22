const router = require("express").Router();
const Contribution = require("../models/Contribution");
const Problem = require("../models/Problem");
const User = require("../models/User");
const { verifyToken, isAdmin } = require("../middlewares/auth");

// =========== create a problem =========== //
router.post("/", verifyToken, async (req, res) => {
  const newProblem = new Problem({
    title: req.body.title,
    description: req.body.description,
    url: req.body.url,
    img: req.body.img,
  });
  try {
    const savedProblem = await newProblem.save();
    res.status(200).json(savedProblem);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error adding problem", error: err.message });
  }
});

// =========== update a problem =========== //
router.put("/:id", verifyToken, async (req, res) => {
  try {
    const problem = await Problem.findById(req.params.id);
    if (problem.userId === req.body.userId) {
      await problem.updateOne({ $set: req.body });
      res.status(200).json("the problem has been updated");
    } else {
      res.status(403).json("you can update only your problem");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// =========== delete a problem =========== //
router.delete("/:id", verifyToken, async (req, res) => {
  try {
    const problem = await Problem.findById(req.params.id);
    if (problem.userId === req.body.userId) {
      await problem.deleteOne();
      res.status(200).json("the problem has been deleted");
    } else {
      res.status(403).json("you can delete only your problem");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// =========== upvote / downvote a problem =========== //
router.put("/:id/upvote", verifyToken, async (req, res) => {
  try {
    const problem = await Problem.findById(req.params.id);
    if (!problem.upvotes.includes(req.body.userId)) {
      await problem.updateOne({ $push: { upvotes: req.body.userId } });
      res.status(200).json("The problem has been upvoted");
    } else {
      await problem.updateOne({ $pull: { upvotes: req.body.userId } });
      res.status(200).json("The problem has been downvoted");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// =========== get some problems =========== //
router.get("/", async (req, res) => {
  try {
    await Problem.aggregate([
      {
        $lookup: {
          from: "contributions", // collection which needs to join
          localField: "_id",
          foreignField: "problemId",
          as: "allContributions", // output array name
        },
      },
    ])
      .exec()
      .then((doc) => {
        res.status(200).json(doc);
      });
  } catch (err) {
    res.status(500).json(err);
  }
});

// =========== get a problem =========== //
router.get("/:id", async (req, res) => {
  try {
    const problem = await Problem.findById(req.params.id);
    const contributions = await Contribution.find({ problemId: problem._id });

    res.status(200).json({ problem, contributions });
  } catch (err) {
    res.status(500).json(err);
  }
});

// =========== get timeline problem =========== //
router.get("/timeline/all", async (req, res) => {
  try {
    const currentUser = await User.findById(req.body.userId);
    const userProblems = await Problem.find({ userId: currentUser._id });
    const friendProblems = await Promise.all(
      currentUser.followings.map((friendId) => {
        return Problem.find({ userId: friendId });
      })
    );
    res.json(userProblems.concat(...friendProblems));
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
