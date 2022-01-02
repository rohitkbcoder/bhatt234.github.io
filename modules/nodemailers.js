
const nodemailer = require("nodemailer")
var otp = Math.floor(Math.random*1000)

const nodemailers = function nodemails() {
  
  var transporter = nodemailer.createTransport({
      service: 'outlook',
      auth: {
        user: 'rohitkb5674@outlook.com',
        pass: 'rohitku7894@'
      }
    });
    
    var mailOptions = {
      from: 'rohitkb5674@outlook.com',
      to: 'rkb60889@gmail.com',
      subject: 'Sending Email using Node.js',
      text: `this is your otp ${otp}`
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
        res.send("your email has been sent")
      }
    });
}
  module.exports= nodemailers;