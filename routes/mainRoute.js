const express = require("express");
const mainController = require("../controllers/mainController");
const router = express.Router();

router.post("/form/:accessKey", saveformdata);

function saveformdata(req, res, next) {
  mainController
    .sendData(req, res, next)
    .then((data) => {})
    .catch((err) => next(err));
}

module.exports = router;