const express = require("express");
const router = express.Router();

const { Contact } = require("../models/Contact");

// Public routes and requires NO LOGIN
router.route("/").post(async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    const contact = new Contact({
      name,
      email,
      phone,
      message,
    });

    const contactDoc = await contact.save();

    res.status(200).json({ message: "Form submitted successfully" });
  } catch (error) {
    res.status(400).json({ message: "Error submitting", error: error.message });
  }
});

module.exports = router;
