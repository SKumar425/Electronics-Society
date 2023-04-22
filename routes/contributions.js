const router = require("express").Router();
const Contribution = require("../models/Contribution");

// =========== create a contribution =========== //
router.post("/", async (req, res) => {
  const newContribution = new Contribution(req.body);
  try {
    const savedContribution = await newContribution.save();
    res.status(200).json(savedContribution);
  } catch (err) {
    res.status(500).json(err);
  }
});

// =========== update a contribution =========== //
router.put("/:id", async (req, res) => {
  try {
    const contribution = await Contribution.findById(req.params.id);
    if (contribution.userId === req.body.userId) {
      await contribution.updateOne({ $set: req.body });
      res.status(200).json("the contribution has been updated");
    } else {
      res.status(403).json("you can update only your contribution");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// =========== delete a contribution =========== //
router.delete("/:id", async (req, res) => {
  try {
    const contribution = await Contribution.findById(req.params.id);
    if (contribution.userId === req.body.userId) {
      await contribution.deleteOne();
      res.status(200).json("the contribution has been deleted");
    } else {
      res.status(403).json("you can delete only your contribution");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
