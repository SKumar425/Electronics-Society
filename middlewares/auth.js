const jwt = require("jsonwebtoken");
const User = require("../models/User");

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

// =========== verifying jsonwebtoken / verifying if user is logged in or not =========== //
verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];
  if (!token) {
    return res.status(403).json({ message: "Token is missing" });
  }
  jwt.verify(token, JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "You are unauthorized!" });
    }
    req.userId = decoded.id;
    next();
  });
};

// =========== checking if user is admin or not =========== //
isAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.userId);

    if (user.role !== "ADMIN")
      res.status(403).json({ message: "You are not admin" });
    next();
  } catch (error) {
    return res.status(401).json({ message: "Authorization error" });
  }
};

const auth = {
  verifyToken,
  isAdmin,
};

module.exports = auth;
