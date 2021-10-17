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

  const html = `<!doctype html><html ⚡4email data-css-strict><head><meta charset="utf-8"><style amp4email-boilerplate>body{visibility:hidden}</style><script async src="https://cdn.ampproject.org/v0.js"></script><style amp-custom>.es-desk-hidden { display:none; float:left; overflow:hidden; width:0; max-height:0; line-height:0;}s { text-decoration:line-through;}body { width:100%; font-family:lato, "helvetica neue", helvetica, arial, sans-serif;}table { border-collapse:collapse; border-spacing:0px;}table td, html, body, .es-wrapper { padding:0; Margin:0;}.es-content, .es-header, .es-footer { table-layout:fixed; width:100%;}p, hr { Margin:0;}h1, h2, h3, h4, h5 { Margin:0; line-height:120%; font-family:lato, "helvetica neue", helvetica, arial, sans-serif;}.es-left { float:left;}.es-right { float:right;}.es-p5 { padding:5px;}.es-p5t { padding-top:5px;}.es-p5b { padding-bottom:5px;}.es-p5l { padding-left:5px;}.es-p5r { padding-right:5px;}.es-p10 { padding:10px;}.es-p10t { padding-top:10px;}.es-p10b { padding-bottom:10px;}.es-p10l { padding-left:10px;}.es-p10r { padding-right:10px;}.es-p15 { padding:15px;}.es-p15t { padding-top:15px;}.es-p15b { padding-bottom:15px;}.es-p15l { padding-left:15px;}.es-p15r { padding-right:15px;}.es-p20 { padding:20px;}.es-p20t { padding-top:20px;}.es-p20b { padding-bottom:20px;}.es-p20l { padding-left:20px;}.es-p20r { padding-right:20px;}.es-p25 { padding:25px;}.es-p25t { padding-top:25px;}.es-p25b { padding-bottom:25px;}.es-p25l { padding-left:25px;}.es-p25r { padding-right:25px;}.es-p30 { padding:30px;}.es-p30t { padding-top:30px;}.es-p30b { padding-bottom:30px;}.es-p30l { padding-left:30px;}.es-p30r { padding-right:30px;}.es-p35 { padding:35px;}.es-p35t { padding-top:35px;}.es-p35b { padding-bottom:35px;}.es-p35l { padding-left:35px;}.es-p35r { padding-right:35px;}.es-p40 { padding:40px;}.es-p40t { padding-top:40px;}.es-p40b { padding-bottom:40px;}.es-p40l { padding-left:40px;}.es-p40r { padding-right:40px;}.es-menu td { border:0;}a { text-decoration:underline;}p, ul li, ol li { font-family:lato, "helvetica neue", helvetica, arial, sans-serif; line-height:150%;}ul li, ol li { Margin-bottom:15px;}.es-menu td a { text-decoration:none; display:block; font-family:lato, "helvetica neue", helvetica, arial, sans-serif;}.es-menu amp-img, .es-button amp-img { vertical-align:middle;}.es-wrapper { width:100%; height:100%;}.es-wrapper-color { background-color:#F4F4F4;}.es-header { background-color:#FFA73B;}.es-header-body { background-color:transparent;}.es-header-body p, .es-header-body ul li, .es-header-body ol li { color:#666666; font-size:14px;}.es-header-body a { color:#111111; font-size:14px;}.es-content-body { background-color:#FFFFFF;}.es-content-body p, .es-content-body ul li, .es-content-body ol li { color:#666666; font-size:18px;}.es-content-body a { color:#FFA73B; font-size:18px;}.es-footer { background-color:transparent;}.es-footer-body { background-color:transparent;}.es-footer-body p, .es-footer-body ul li, .es-footer-body ol li { color:#666666; font-size:14px;}.es-footer-body a { color:#111111; font-size:14px;}.es-infoblock, .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li { line-height:120%; font-size:12px; color:#CCCCCC;}.es-infoblock a { font-size:12px; color:#CCCCCC;}h1 { font-size:48px; font-style:normal; font-weight:normal; color:#111111;}h2 { font-size:24px; font-style:normal; font-weight:normal; color:#111111;}h3 { font-size:20px; font-style:normal; font-weight:normal; color:#111111;}.es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:48px;}.es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:24px;}.es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px;}a.es-button, button.es-button { border-style:solid; border-color:#FFA73B; border-width:15px 25px 15px 25px; display:inline-block; background:#FFA73B; border-radius:2px; font-size:20px; font-family:helvetica, "helvetica neue", arial, verdana, sans-serif; font-weight:normal; font-style:normal; line-height:120%; color:#FFFFFF; text-decoration:none; width:auto; text-align:center;}.es-button-border { border-style:solid solid solid solid; border-color:#FFA73B #FFA73B #FFA73B #FFA73B; background:1px; border-width:1px 1px 1px 1px; display:inline-block; border-radius:2px; width:auto;}.es-p-default { padding-top:20px; padding-right:30px; padding-bottom:0px; padding-left:30px;}.es-p-all-default { padding:0px;}@media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150% } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120% } h1 { font-size:30px; text-align:center } h2 { font-size:26px; text-align:center } h3 { font-size:20px; text-align:center } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:30px } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:26px } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px } .es-menu td a { font-size:16px } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:16px } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:16px } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px } *[class="gmail-fix"] { display:none } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left } .es-m-txt-r amp-img { float:right } .es-m-txt-c amp-img { margin:0 auto } .es-m-txt-l amp-img { float:left } .es-button-border { display:block } a.es-button, button.es-button { font-size:20px; display:block; border-width:15px 25px 15px 25px } .es-btn-fw { border-width:10px 0px; text-align:center } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100% } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%; max-width:600px } .es-adapt-td { display:block; width:100% } .adapt-img { width:100%; height:auto } td.es-m-p0 { padding:0px } td.es-m-p0r { padding-right:0px } td.es-m-p0l { padding-left:0px } td.es-m-p0t { padding-top:0px } td.es-m-p0b { padding-bottom:0 } td.es-m-p20b { padding-bottom:20px } .es-mobile-hidden, .es-hidden { display:none } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto; overflow:visible; float:none; max-height:inherit; line-height:inherit } tr.es-desk-hidden { display:table-row } table.es-desk-hidden { display:table } td.es-desk-menu-hidden { display:table-cell } .es-menu td { width:1% } table.es-table-not-adapt, .esd-block-html table { width:auto } table.es-social { display:inline-block } table.es-social td { display:inline-block } }</style></head>
<body>
    <div class="es-wrapper-color"> 
<td width="278" valign="top"><![endif]--><table class="es-right" cellspacing="0" cellpadding="0" align="right"><tr><td width="278" align="left"><table width="100%" cellspacing="0" cellpadding="0" role="presentation"><tr><td align="right" class="es-infoblock es-m-txt-c"><p><a href="https://viewstripo.email" class="view" target="_blank" style="font-family: 'arial', 'helvetica neue', 'helvetica', 'sans-serif'">View in browser</a></p></td></tr></table></td></tr></table> <!--[if mso]></td></tr></table><![endif]--></td></tr></table></td>
</tr></table><table class="es-header" cellspacing="0" cellpadding="0" align="center"><tr><td align="center"><table class="es-header-body" width="600" cellspacing="0" cellpadding="0" align="center"><tr><td class="es-p20t es-p10b es-p10r es-p10l" align="left"><table width="100%" cellspacing="0" cellpadding="0"><tr><td width="580" valign="top" align="center"><table width="100%" cellspacing="0" cellpadding="0"><tr><td align="center" style="display: none"></td></tr></table></td></tr></table></td></tr></table></td>
</tr></table><table class="es-content" cellspacing="0" cellpadding="0" align="center"><tr><td style="background-color: #ffa73b" bgcolor="#ffa73b" align="center"><table class="es-content-body" style="background-color: transparent" width="600" cellspacing="0" cellpadding="0" align="center"><tr><td align="left"><table width="100%" cellspacing="0" cellpadding="0"><tr><td width="600" valign="top" align="center"><table style="background-color: #ffffff;border-radius: 4px;border-collapse: separate" width="100%" cellspacing="0" cellpadding="0" bgcolor="#ffffff" role="presentation"><tr><td class="es-p35t es-p5b es-p30r es-p30l" align="center"><h1>You got a Response!</h1></td>
</tr><tr><td class="es-p5t es-p5b es-p20r es-p20l" bgcolor="#ffffff" align="center" style="font-size:0"><table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation"><tr><td style="border-bottom: 1px solid #ffffff;background: rgba(0, 0, 0, 0) none repeat scroll 0% 0%;height: 1px;width: 100%;margin: 0px"></td></tr></table></td></tr></table></td></tr></table></td></tr></table></td>
</tr></table><table class="es-content" cellspacing="0" cellpadding="0" align="center"><tr><td align="center"><table class="es-content-body" style="background-color: transparent" width="600" cellspacing="0" cellpadding="0" align="center"><tr><td align="left"><table width="100%" cellspacing="0" cellpadding="0"><tr><td width="600" valign="top" align="center"><table style="border-radius: 4px;border-collapse: separate;background-color: #ffffff" width="100%" cellspacing="0" cellpadding="0" bgcolor="#ffffff" role="presentation"><tr><td class="es-p20t es-p20b es-p30r es-p30l es-m-txt-l" bgcolor="#ffffff" align="left"><p>We're excited to have you get started. Below is your access key.</p></td></tr>` 
+  JSON.stringify(submission) +
`<tr><td class="es-p20t es-p30r es-p30l es-m-txt-l" align="left"><p>If you have any questions, just reply to this email—we're always happy to help out.</p></td></tr><tr><td class="es-p20t es-p40b es-p30r es-p30l es-m-txt-l" align="left"><p>Cheers,</p><p>FormClip Team</p></td></tr></table></td></tr></table></td></tr></table></td>
</tr></table><table class="es-content" cellspacing="0" cellpadding="0" align="center"><tr><td align="center"><table class="es-content-body" style="background-color: transparent" width="600" cellspacing="0" cellpadding="0" align="center"><tr><td align="left"><table width="100%" cellspacing="0" cellpadding="0"><tr><td width="600" valign="top" align="center"><table width="100%" cellspacing="0" cellpadding="0" role="presentation"><tr><td class="es-p10t es-p20b es-p20r es-p20l" align="center" style="font-size:0"><table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation"><tr><td style="border-bottom: 1px solid #f4f4f4;background: rgba(0, 0, 0, 0) none repeat scroll 0% 0%;height: 1px;width: 100%;margin: 0px"></td></tr></table></td></tr></table></td></tr></table></td></tr></table></td>
</tr></table><table class="es-content" cellspacing="0" cellpadding="0" align="center"><tr><td align="center"><table class="es-content-body" style="background-color: transparent" width="600" cellspacing="0" cellpadding="0" align="center"><tr><td align="left"><table width="100%" cellspacing="0" cellpadding="0"><tr><td width="600" valign="top" align="center"><table style="background-color: #ffecd1;border-radius: 4px;border-collapse: separate" width="100%" cellspacing="0" cellpadding="0" bgcolor="#ffecd1" role="presentation"><tr><td class="es-p30t es-p30r es-p30l" align="center"><h3 style="color: #111111">Need more help?</h3></td></tr><tr><td class="es-p30b es-p30r es-p30l" align="center"><a target="_blank" href="https://formclip.xyz/" style="color: #ffa73b">We’re here, ready to talk</a></td></tr></table></td></tr></table></td></tr></table></td>
</tr></table><table cellpadding="0" cellspacing="0" class="es-footer" align="center"><tr><td align="center"><table class="es-footer-body" width="600" cellspacing="0" cellpadding="0" align="center"><tr><td class="es-p30t es-p30b es-p30r es-p30l" align="left"><table width="100%" cellspacing="0" cellpadding="0"><tr><td width="540" valign="top" align="center"><table width="100%" cellspacing="0" cellpadding="0" role="presentation"><tr><td align="left" class="es-p25t"><p>If these emails get annoying, please feel free to&nbsp;<strong><a target="_blank" class="unsubscribe" href>unsubscribe</a></strong>.</p></td></tr><tr><td class="es-p25t" align="left"><p>Made with love in India.</p></td></tr></table></td></tr></table></td></tr></table></td>
</tr></table><table class="es-content" cellspacing="0" cellpadding="0" align="center"><tr><td align="center"><table class="es-content-body" style="background-color: transparent" width="600" cellspacing="0" cellpadding="0" align="center"><tr><td class="es-p30t es-p30b es-p20r es-p20l" align="left"><table width="100%" cellspacing="0" cellpadding="0"><tr><td width="560" valign="top" align="center"><table width="100%" cellspacing="0" cellpadding="0"><tr><td align="center" style="display: none"></td></tr></table></td></tr></table></td></tr></table></td></tr></table></td></tr></table></div></body></html>`;

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
    },
    tls: {rejectUnauthorized: false}
  });
  const html = `<!doctype html><html ⚡4email data-css-strict><head><meta charset="utf-8"><style amp4email-boilerplate>body{visibility:hidden}</style><script async src="https://cdn.ampproject.org/v0.js"></script><style amp-custom>.es-desk-hidden { display:none; float:left; overflow:hidden; width:0; max-height:0; line-height:0;}s { text-decoration:line-through;}body { width:100%; font-family:lato, "helvetica neue", helvetica, arial, sans-serif;}table { border-collapse:collapse; border-spacing:0px;}table td, html, body, .es-wrapper { padding:0; Margin:0;}.es-content, .es-header, .es-footer { table-layout:fixed; width:100%;}p, hr { Margin:0;}h1, h2, h3, h4, h5 { Margin:0; line-height:120%; font-family:lato, "helvetica neue", helvetica, arial, sans-serif;}.es-left { float:left;}.es-right { float:right;}.es-p5 { padding:5px;}.es-p5t { padding-top:5px;}.es-p5b { padding-bottom:5px;}.es-p5l { padding-left:5px;}.es-p5r { padding-right:5px;}.es-p10 { padding:10px;}.es-p10t { padding-top:10px;}.es-p10b { padding-bottom:10px;}.es-p10l { padding-left:10px;}.es-p10r { padding-right:10px;}.es-p15 { padding:15px;}.es-p15t { padding-top:15px;}.es-p15b { padding-bottom:15px;}.es-p15l { padding-left:15px;}.es-p15r { padding-right:15px;}.es-p20 { padding:20px;}.es-p20t { padding-top:20px;}.es-p20b { padding-bottom:20px;}.es-p20l { padding-left:20px;}.es-p20r { padding-right:20px;}.es-p25 { padding:25px;}.es-p25t { padding-top:25px;}.es-p25b { padding-bottom:25px;}.es-p25l { padding-left:25px;}.es-p25r { padding-right:25px;}.es-p30 { padding:30px;}.es-p30t { padding-top:30px;}.es-p30b { padding-bottom:30px;}.es-p30l { padding-left:30px;}.es-p30r { padding-right:30px;}.es-p35 { padding:35px;}.es-p35t { padding-top:35px;}.es-p35b { padding-bottom:35px;}.es-p35l { padding-left:35px;}.es-p35r { padding-right:35px;}.es-p40 { padding:40px;}.es-p40t { padding-top:40px;}.es-p40b { padding-bottom:40px;}.es-p40l { padding-left:40px;}.es-p40r { padding-right:40px;}.es-menu td { border:0;}a { text-decoration:underline;}p, ul li, ol li { font-family:lato, "helvetica neue", helvetica, arial, sans-serif; line-height:150%;}ul li, ol li { Margin-bottom:15px;}.es-menu td a { text-decoration:none; display:block; font-family:lato, "helvetica neue", helvetica, arial, sans-serif;}.es-menu amp-img, .es-button amp-img { vertical-align:middle;}.es-wrapper { width:100%; height:100%;}.es-wrapper-color { background-color:#F4F4F4;}.es-header { background-color:#FFA73B;}.es-header-body { background-color:transparent;}.es-header-body p, .es-header-body ul li, .es-header-body ol li { color:#666666; font-size:14px;}.es-header-body a { color:#111111; font-size:14px;}.es-content-body { background-color:#FFFFFF;}.es-content-body p, .es-content-body ul li, .es-content-body ol li { color:#666666; font-size:18px;}.es-content-body a { color:#FFA73B; font-size:18px;}.es-footer { background-color:transparent;}.es-footer-body { background-color:transparent;}.es-footer-body p, .es-footer-body ul li, .es-footer-body ol li { color:#666666; font-size:14px;}.es-footer-body a { color:#111111; font-size:14px;}.es-infoblock, .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li { line-height:120%; font-size:12px; color:#CCCCCC;}.es-infoblock a { font-size:12px; color:#CCCCCC;}h1 { font-size:48px; font-style:normal; font-weight:normal; color:#111111;}h2 { font-size:24px; font-style:normal; font-weight:normal; color:#111111;}h3 { font-size:20px; font-style:normal; font-weight:normal; color:#111111;}.es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:48px;}.es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:24px;}.es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px;}a.es-button, button.es-button { border-style:solid; border-color:#FFA73B; border-width:15px 25px 15px 25px; display:inline-block; background:#FFA73B; border-radius:2px; font-size:20px; font-family:helvetica, "helvetica neue", arial, verdana, sans-serif; font-weight:normal; font-style:normal; line-height:120%; color:#FFFFFF; text-decoration:none; width:auto; text-align:center;}.es-button-border { border-style:solid solid solid solid; border-color:#FFA73B #FFA73B #FFA73B #FFA73B; background:1px; border-width:1px 1px 1px 1px; display:inline-block; border-radius:2px; width:auto;}.es-p-default { padding-top:20px; padding-right:30px; padding-bottom:0px; padding-left:30px;}.es-p-all-default { padding:0px;}@media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150% } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120% } h1 { font-size:30px; text-align:center } h2 { font-size:26px; text-align:center } h3 { font-size:20px; text-align:center } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:30px } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:26px } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px } .es-menu td a { font-size:16px } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:16px } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:16px } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px } *[class="gmail-fix"] { display:none } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left } .es-m-txt-r amp-img { float:right } .es-m-txt-c amp-img { margin:0 auto } .es-m-txt-l amp-img { float:left } .es-button-border { display:block } a.es-button, button.es-button { font-size:20px; display:block; border-width:15px 25px 15px 25px } .es-btn-fw { border-width:10px 0px; text-align:center } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100% } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%; max-width:600px } .es-adapt-td { display:block; width:100% } .adapt-img { width:100%; height:auto } td.es-m-p0 { padding:0px } td.es-m-p0r { padding-right:0px } td.es-m-p0l { padding-left:0px } td.es-m-p0t { padding-top:0px } td.es-m-p0b { padding-bottom:0 } td.es-m-p20b { padding-bottom:20px } .es-mobile-hidden, .es-hidden { display:none } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto; overflow:visible; float:none; max-height:inherit; line-height:inherit } tr.es-desk-hidden { display:table-row } table.es-desk-hidden { display:table } td.es-desk-menu-hidden { display:table-cell } .es-menu td { width:1% } table.es-table-not-adapt, .esd-block-html table { width:auto } table.es-social { display:inline-block } table.es-social td { display:inline-block } }</style></head>
<body><div class="es-wrapper-color"> <!--[if gte mso 9]><v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t"> <v:fill type="tile" color="#f4f4f4"></v:fill> </v:background><![endif]--><table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0"><tr class="gmail-fix" height="0"><td><table width="600" cellspacing="0" cellpadding="0" border="0" align="center"><tr><td style="line-height: 1px;min-width: 600px" height="0"><amp-img src="https://tefwii.stripocdn.email/content/guids/CABINET_837dc1d79e3a5eca5eb1609bfe9fd374/images/41521605538834349.png" style="display: block;max-height: 0px;min-height: 0px;min-width: 600px;width: 600px" alt width="600" height="1"></amp-img></td></tr></table></td>
</tr><tr><td valign="top"><table cellpadding="0" cellspacing="0" class="es-content" align="center"><tr><td align="center"><table class="es-content-body" style="background-color: transparent" width="600" cellspacing="0" cellpadding="0" align="center"><tr><td class="es-p15t es-p15b es-p10r es-p10l" align="left"> <!--[if mso]><table width="580" cellpadding="0" cellspacing="0"><tr><td width="282" valign="top"><![endif]--><table class="es-left" cellspacing="0" cellpadding="0" align="left"><tr><td width="282" align="left"><table width="100%" cellspacing="0" cellpadding="0" role="presentation"><tr><td class="es-infoblock es-m-txt-c" align="left"><p style="font-family: arial, helvetica\ neue, helvetica, sans-serif">Formclip</p></td></tr></table></td></tr></table> <!--[if mso]></td><td width="20"></td>
<td width="278" valign="top"><![endif]--><table class="es-right" cellspacing="0" cellpadding="0" align="right"><tr><td width="278" align="left"><table width="100%" cellspacing="0" cellpadding="0" role="presentation"><tr><td align="right" class="es-infoblock es-m-txt-c"><p><a href="https://formclip.xyz" class="view" target="_blank" style="font-family: 'arial', 'helvetica neue', 'helvetica', 'sans-serif'">View in browser</a></p></td></tr></table></td></tr></table> <!--[if mso]></td></tr></table><![endif]--></td></tr></table></td>
</tr></table><table class="es-header" cellspacing="0" cellpadding="0" align="center"><tr><td align="center"><table class="es-header-body" width="600" cellspacing="0" cellpadding="0" align="center"><tr><td class="es-p20t es-p10b es-p10r es-p10l" align="left"><table width="100%" cellspacing="0" cellpadding="0"><tr><td width="580" valign="top" align="center"><table width="100%" cellspacing="0" cellpadding="0"><tr><td align="center" style="display: none"></td></tr></table></td></tr></table></td></tr></table></td>
</tr></table><table class="es-content" cellspacing="0" cellpadding="0" align="center"><tr><td style="background-color: #ffa73b" bgcolor="#ffa73b" align="center"><table class="es-content-body" style="background-color: transparent" width="600" cellspacing="0" cellpadding="0" align="center"><tr><td align="left"><table width="100%" cellspacing="0" cellpadding="0"><tr><td width="600" valign="top" align="center"><table style="background-color: #ffffff;border-radius: 4px;border-collapse: separate" width="100%" cellspacing="0" cellpadding="0" bgcolor="#ffffff" role="presentation"><tr><td class="es-p35t es-p5b es-p30r es-p30l" align="center"><h1>Welcome!</h1></td>
</tr><tr><td class="es-p5t es-p5b es-p20r es-p20l" bgcolor="#ffffff" align="center" style="font-size:0"><table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation"><tr><td style="border-bottom: 1px solid #ffffff;background: rgba(0, 0, 0, 0) none repeat scroll 0% 0%;height: 1px;width: 100%;margin: 0px"></td></tr></table></td></tr></table></td></tr></table></td></tr></table></td>
</tr></table><table class="es-content" cellspacing="0" cellpadding="0" align="center"><tr><td align="center"><table class="es-content-body" style="background-color: transparent" width="600" cellspacing="0" cellpadding="0" align="center"><tr><td align="left"><table width="100%" cellspacing="0" cellpadding="0"><tr><td width="600" valign="top" align="center"><table style="border-radius: 4px;border-collapse: separate;background-color: #ffffff" width="100%" cellspacing="0" cellpadding="0" bgcolor="#ffffff" role="presentation"><tr><td class="es-p20t es-p20b es-p30r es-p30l es-m-txt-l" bgcolor="#ffffff" align="left"><p>We're excited to have you get started. Below is your access key.</p></td></tr><tr><td class="es-p20t es-p30r es-p30l es-m-txt-l" align="left">`+ accessKey + `</td>
</tr><tr><td class="es-p20t es-p30r es-p30l es-m-txt-l" align="left"><p>If you have any questions, just reply to this email—we're always happy to help out.</p></td></tr><tr><td class="es-p20t es-p40b es-p30r es-p30l es-m-txt-l" align="left"><p>Cheers,</p><p>FormClip Team</p></td></tr></table></td></tr></table></td></tr></table></td>
</tr></table><table class="es-content" cellspacing="0" cellpadding="0" align="center"><tr><td align="center"><table class="es-content-body" style="background-color: transparent" width="600" cellspacing="0" cellpadding="0" align="center"><tr><td align="left"><table width="100%" cellspacing="0" cellpadding="0"><tr><td width="600" valign="top" align="center"><table width="100%" cellspacing="0" cellpadding="0" role="presentation"><tr><td class="es-p10t es-p20b es-p20r es-p20l" align="center" style="font-size:0"><table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation"><tr><td style="border-bottom: 1px solid #f4f4f4;background: rgba(0, 0, 0, 0) none repeat scroll 0% 0%;height: 1px;width: 100%;margin: 0px"></td></tr></table></td></tr></table></td></tr></table></td></tr></table></td>
</tr></table><table class="es-content" cellspacing="0" cellpadding="0" align="center"><tr><td align="center"><table class="es-content-body" style="background-color: transparent" width="600" cellspacing="0" cellpadding="0" align="center"><tr><td align="left"><table width="100%" cellspacing="0" cellpadding="0"><tr><td width="600" valign="top" align="center"><table style="background-color: #ffecd1;border-radius: 4px;border-collapse: separate" width="100%" cellspacing="0" cellpadding="0" bgcolor="#ffecd1" role="presentation"><tr><td class="es-p30t es-p30r es-p30l" align="center"><h3 style="color: #111111">Need more help?</h3></td></tr><tr><td class="es-p30b es-p30r es-p30l" align="center"><a target="_blank" href="https://formclip.xyz/" style="color: #ffa73b">We’re here, ready to talk</a></td></tr></table></td></tr></table></td></tr></table></td>
</tr></table><table cellpadding="0" cellspacing="0" class="es-footer" align="center"><tr><td align="center"><table class="es-footer-body" width="600" cellspacing="0" cellpadding="0" align="center"><tr><td class="es-p30t es-p30b es-p30r es-p30l" align="left"><table width="100%" cellspacing="0" cellpadding="0"><tr><td width="540" valign="top" align="center"><table width="100%" cellspacing="0" cellpadding="0" role="presentation"><tr><td align="left" class="es-p25t"><p>If these emails get annoying, please feel free to&nbsp;<strong><a target="_blank" class="unsubscribe" href>unsubscribe</a></strong>.</p></td></tr><tr><td class="es-p25t" align="left"><p>Made with love in India.</p></td></tr></table></td></tr></table></td></tr></table></td>
</tr></table><table class="es-content" cellspacing="0" cellpadding="0" align="center"><tr><td align="center"><table class="es-content-body" style="background-color: transparent" width="600" cellspacing="0" cellpadding="0" align="center"><tr><td class="es-p30t es-p30b es-p20r es-p20l" align="left"><table width="100%" cellspacing="0" cellpadding="0"><tr><td width="560" valign="top" align="center"><table width="100%" cellspacing="0" cellpadding="0"><tr><td align="center" style="display: none"></td></tr></table></td></tr></table></td></tr></table></td></tr></table></td></tr></table></div></body></html>`;
  
  let info = await transporter.sendMail({
    "from": "Form Clip <hello@formclip.xyz",
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