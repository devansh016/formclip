const userModel = require("../models/userModel");
const emailHandler = require('../utils/email-handler.js');
require("dotenv").config();

async function saveformResponse(req, res, next) {
    const accessKey = req.params.accessKey;
    const obj = JSON.parse(JSON.stringify(req.body));
    user = await userModel.findOne({ "accessKey": accessKey });
    if (user) {
        //Sending mail to user
        emailHandler.sendSubmissionEmail({ 
            sitename: req.headers.origin,
            submission: obj,
            emailReceiver: "<"+user.email+">"
        });
        //Saving reponse in database
        user.totalSubmission = user.totalSubmission + 1;
        user.formResponses.push({
            reponse: JSON.stringify(obj),
            sitename: req.headers.origin
        });
        await user.save();
        res.redirect(req.headers.referer).send();
    }
    else { 
        res.status(404).send();
    }
}

module.exports = {
    saveformResponse
};