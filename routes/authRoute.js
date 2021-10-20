const express = require("express");
const authController = require("../controllers/authController");
const router = express.Router();

router.post("/register", register);

function register(req, res, next) {
  authController
    .registerUser(req, res, next)
    .then((data) => {})
    .catch((err) => next(err));
}

module.exports = router;