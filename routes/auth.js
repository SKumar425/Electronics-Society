const router = require("express").Router();
const User = require("../models/User");
var jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const checkUsernameOrEmail = require("../middlewares/checkUsernameOrEmail");

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

// =========== Register =========== //
router.post("/register", checkUsernameOrEmail, async (req, res) => {
  try {
    //create new user
    const newUser = new User({
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
      profession: req.body.profession,
    });

    //save user and respond
    const user = await newUser.save();
    res.status(200).json({
      id: user._id,
      name: user.name,
      username: user.username,
      email: user.email,
      role: user.role,
      profession: user.profession,
      profilePicture: user.profilePicture,
      coverPicture: user.coverPicture,
      followers: user.followers,
      followings: user.followings,
      createdAt: user.createdAt,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// =========== Login =========== //
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).json("user not found");

    const validPassword = bcrypt.compareSync(req.body.password, user.password);
    !validPassword &&
      res
        .status(400)
        .json({ message: "wrong email or password", accessToken: null });

    const token = jwt.sign({ id: user._id }, JWT_SECRET_KEY, {
      expiresIn: 86400, // 24 hours
    });

    res.status(200).json({
      success: true,
      id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
      accessToken: token,
    });
  } catch (err) {
    res.status(500).json({ message: "error while login", error: err.message });
  }
});

module.exports = router;
