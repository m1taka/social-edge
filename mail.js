/* eslint-disable no-console */
'use strict';
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'yourmail@gmail.com',
    pass: 'yourpassword'
  }
});


function sendMail(address){

    var mailOptions = {
      from: 'yourmail@gmail.com',
      to: address,
      subject: 'New Mail',
      text: 'Demo text'
    };

    transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
}); 

}

module.exports = sendMail;