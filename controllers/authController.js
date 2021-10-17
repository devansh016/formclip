const userModel = require("../models/userModel");
const emailHandler = require('../utils/email-handler.js');
var randomize = require('randomatic');
require("dotenv").config();

async function register(req, res, next) {
  const { email } = req.params;
  if (await userModel.findOne({ email })) {
    res.status(403).send({ response: 'Email id' + email + ' is already in use' });
  }
  else { 
    accessKey = randomize('Aa0', 20);
    const user = new userModel({
        "email": email.toLowerCase(),
        "accessKey": accessKey
    });
    emailHandler.sendAccessKey({ 
      "accessKey": accessKey,
      "emailReceiver": "<"+email+">"
    });
    await user.save();
    res.status(200).send({response: "AccessKey send on Email."});
  }
}


module.exports = {
  register
};
