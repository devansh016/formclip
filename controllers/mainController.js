const userModel = require("../models/userModel");
const emailHandler = require('../utils/email-handler.js');
require("dotenv").config();

async function sendData(req, res, next) {
    console.log(req);
    const accessKey = req.params.accessKey;
    const obj = JSON.parse(JSON.stringify(req.body));
    user = await userModel.findOne({ "accessKey": accessKey });
    if (user) {
        emailHandler.sendSubmissionEmail({ 
            sitename: req.headers.origin,
            submission: obj,
            emailReceiver: "<"+user.email+">"
        });
        user.totalSubmission = user.totalSubmission + 1;
        await user.save();
        res.redirect(req.header.referer).send();
    }
    else { 
        res.status(404).send();
    }
}

module.exports = {
    sendData
};
