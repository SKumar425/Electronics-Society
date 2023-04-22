const mongoose = require("mongoose");

const ContributionSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    problemId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "problems",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contribution", ContributionSchema);
