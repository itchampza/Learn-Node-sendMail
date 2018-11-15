const nodemailer = require('nodemailer');

// setup mail transporter service
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your email', // your email
    pass: 'your password'   // your password
  }
});

// setup email data with unicode symbols
const mailOptions = {
  from: 'sender@hotmail.com',              // sender
  to: 'list of receivers',              // list of receivers
  subject: 'Hello from sender',            // Mail subject
  html: '<b>Do you receive this mail?</b>' // HTML body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function (err, info) {
   if(err)
     console.log(err)
   else
     console.log(info);
});