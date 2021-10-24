const nodemailer = require("nodemailer");
require('dotenv').config();

async function sendSubmissionEmail({sitename , submission, emailReceiver }) {
  let transporter = nodemailer.createTransport({
    host: process.env.email_host,
    port: process.env.email_port,
    auth: {
      user: process.env.email_user,
      pass: process.env.email_pass
    },
    tls: {rejectUnauthorized: false}
  });
  var formdata = "";
  for (const key in submission){
    if(submission.hasOwnProperty(key)){
      formdata = formdata + `${key} : ${submission[key]}` + "\n"
    }
  }
  const text = `
Hi there,
You got a submission on site ` + sitename + `.
\n` + formdata + 
`\nThanks,
The FormClip Team`;

  let info = await transporter.sendMail({
    "from": "Form Clip <hello@formclip.xyz>",
    "to": emailReceiver, 
    "subject": "New Submission on Site " + sitename,
    "text": text,
  });
  console.log("Message sent: %s", info.messageId);
}

async function sendAccessKey({ accessKey, emailReceiver }) {
  let transporter = nodemailer.createTransport({
    host: process.env.email_host,
    port: process.env.email_port,
    auth: {
      user: process.env.email_user,
      pass: process.env.email_pass
    },
    tls: {rejectUnauthorized: false}
  });
  const text = `
Hi there,

Thanks for signing up with FormClip. Once you setup form on your website, you'll get updates whenever a user submit the form.
Below is your accessKey:\n
`+ accessKey + `\n
You can visit https://docs.formclip.xyz/ if you need help to integrate you website.
If you have any questions, just reply to this email—we're always happy to help out.
  
Thanks,
The FormClip Team`;

  let info = await transporter.sendMail({
    "from": "Form Clip <hello@formclip.xyz",
    "to": emailReceiver, 
    "subject": "Welcome to FormClip!",
    "text": text,
  });
  console.log("Message sent: %s", info.messageId);
}

module.exports ={
    sendSubmissionEmail,
    sendAccessKey
}