const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

// Configure your email transporter
let transporter = nodemailer.createTransporter({
  service: "gmail",
  auth: {
    user: "YOUR_GMAIL@gmail.com",
    pass: "YOUR_APP_PASSWORD", // Use App Password, not normal Gmail password
  },
});

exports.sendEmailOnNewMessage = functions.firestore
  .document("messages/{docId}")
  .onCreate((snap, context) => {
    const data = snap.data();

    const mailOptions = {
      from: "YOUR_GMAIL@gmail.com",
      to: "YOUR_RECEIVE_EMAIL@gmail.com", // where you want to receive notifications
      subject: "📩 New Contact Form Message",
      text: `
        Name: ${data.name}
        Email: ${data.email}
        Message: ${data.message}
      `,
    };

    return transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        return null;
      }
      console.log("Email sent:", info.response);
      return null;
    });
  });
