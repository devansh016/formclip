const nodemailer = require("nodemailer");
require('dotenv').config();

async function sendSubmissionEmail({sitename , submission, emailReceiver }) {
  let transporter = nodemailer.createTransport({
    host: process.env.email_host,
    port: process.env.email_port,
    auth: {
      user: process.env.email_user,
      pass: process.env.email_pass
    }
  });
  const html = `<div>` + JSON.stringify(submission) + `</div>`;

  let info = await transporter.sendMail({
    "from": "Form Clip <hello@formclip.xyz>",
    "to": emailReceiver, 
    "subject": "New Submission on Site " + sitename,
    "html": html,
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
    }
  });
  const html = `<center>
  <table class='body-wrap' style='text-align:center;width:86%;font-family:arial,sans-serif;border:12px solid rgba(126, 122, 122, 0.08);border-spacing:4px 20px;'><tr></tr>
  <tr><td><center><table bgcolor='#FFFFFF' width='80%'' border='0'><tbody><tr><td style='font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:13px;color:#202020;line-height:1.5'><h1 style='color:#575252;text-align:center;'>
  Welcome to FormClip
  </h1></td></tr><tr style='text-align:center;color:#575252;font-size:14px;'><td><span><h3>
  Congratulations
  <h3></span></td></tr><tr style='text-align:center;color:#a2a2a2;font-size:14px;'><td><span>
  We are happy to welcome you to FormClip.
  </span></td></tr><tr style='text-align:center;color:#a2a2a2;font-size:14px;height:45px;'><td><span>
  FormClip is great tool for accepting responses of your forms on static sites without any hassel or any server costs.
  </span></td></tr><tr style='text-align:center;color:#a2a2a2;font-size:14px;height:45px;'><td><span><b style='color:#575252;'>
  Access Key: </b>` + accessKey +
  `</span></td></tr></tbody></table></center></td></tr></table></center>`;
  
  let info = await transporter.sendMail({
    "from": "Devansh Chaudhary <devanshchaudhary2002@gmail.com>",
    "to": emailReceiver, 
    "subject": "Welcome to FormClip!",
    "html": html,
  });
  console.log("Message sent: %s", info.messageId);
}

module.exports ={
    sendSubmissionEmail,
    sendAccessKey
}