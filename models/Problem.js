const mongoose = require("mongoose");

const ProblemSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    upvotes: {
      type: Array,
      default: [],
    },
    contributions: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "contributions",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Problem", ProblemSchema);
