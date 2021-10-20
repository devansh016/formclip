const userModel = require("../models/userModel");
const emailHandler = require('../utils/email-handler.js');
var randomize = require('randomatic');
require("dotenv").config();

async function registerUser(req, res, next) {
	const { email } = req.body;
	if (await userModel.findOne({ email })) {
		res.status(403).send({message: 'Email id ' + email + ' is already in use.' });
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
		res.status(200).send({message: "AccessKey send on your email."});
	}
}

module.exports = {
	registerUser
};