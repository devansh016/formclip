const express = require("express");
const port = process.env.PORT || 80;
var multer = require('multer');
var cors = require('cors')
require("./utils/database");
var forms = multer();
const app = express();

var corsOptions = {
	origin: 'https://formclip.xyz',
	optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use(express.json()); 
app.use(express.urlencoded({ extended: false }))
app.use(forms.array()); 

//Main Routes
const mainRoute = require("./routes/mainRoute");
app.use(mainRoute);

//Auth Routes
const authRoute = require("./routes/authRoute");
app.use('/auth',authRoute);

app.listen(port);
console.log("App running on port " + port);