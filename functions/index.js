/*
*********Serving HTML to web crawlers
*/
app.configure(() => {

});


/*
********* Email
*/

var firebase = require("firebase");

var config = {
    apiKey: "AIzaSyDiZ1YBms2zgTNk1jULGT-NpdBsraIhNVo",
    authDomain: "renote-633e0.firebaseapp.com",
    databaseURL: "https://renote-633e0.firebaseio.com",
    storageBucket: "renote-633e0.appspot.com",
}
firebase.initializeApp(config, () => {
    app.use(require('prerender-node').set('prerenderToken', 'e5vNH1ePtkGwDphl3KkB'));
    app.use(express.static("dist")); app.use(app.router);
});

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
        from: "Renote Conntect <wwodrich@gmail.com>",
        to: "Boss Man <wwodrich@gmail.com>",
        /*cc: "else <else***@gmail.com>",*/
        subject: "Renote Connect",
        text: name + " " + emailAddr + "\n" + emessage
    };
    var server = emailjs.server.connect({
        user: "wwodrich@gmail.com",
        password: "1Cystijrtanntgo",
        host: "smtp.gmail.com",
        ssl: true
    });
    server.send(emailData, function (err, message) { console.log(err || message); });
}