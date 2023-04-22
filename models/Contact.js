const mongoose = require("mongoose");
const validator = require("validator");
require("dotenv").config();

const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail) {
          throw new Error("Invalid Email");
        }
      },
    },
    phone: {
        type: Number,
        required: true,
        trim: true,
    },
    message: {
      type: String,
      maxlength: 600,
    },
  },
  {
    timestamps: true,
  },
);

const Contact = mongoose.model("Contact", contactSchema);
module.exports = { Contact };
