const userModel = require("../models/userModel");
const emailHandler = require('../utils/email-handler.js');
require("dotenv").config();

async function sendData(req, res, next) {
    const accessKey = req.params.accessKey;
    user = await userModel.findOne({ "accessKey": accessKey });
    if (user) {
        emailHandler.sendSubmissionEmail({ 
            sitename: req.headers.host,
            submission: req.body,
            emailReceiver: "<"+user.email+">"
        });
        res.status(200).send();
    }
    else { 
        res.status(404).send();
    }
}

module.exports = {
    sendData
};
