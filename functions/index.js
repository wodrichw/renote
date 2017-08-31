/*
********* Email
*/

var firebase = require("firebase");

var config = {
    *****
    *****
    *****
}


const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.contactMessage = functions.database
    .ref('/emailMessages/{pushId}')
    .onWrite(event => {
        const emailData = event.data.val();
        const preEmailData = event.data.previous.val();
        if (emailData != preEmailData) { //prevents multiples of the same email from being sent
            console.log("Recent Message", emailData.message);
            sendEmail(emailData.message, emailData.name, emailData.email);
            return event.data.ref.parent.child('sentMessages').set(emailData);
        }
    });

function sendEmail(emessage, name, emailAddr) {
    var emailjs = require('emailjs/email');
    var emailData = {
        from: "Renote Conntect <*********>",
        to: "Boss Man <*********>",
        /*cc: "else <else***@gmail.com>",*/
        subject: "Renote Connect",
        text: name + " " + emailAddr + "\n" + emessage
    };
    var server = emailjs.server.connect({
        user: "************",
        password: "**********",
        host: "smtp.gmail.com",
        ssl: true
    });
    server.send(emailData, function (err, message) { console.log(err || message); });
}
