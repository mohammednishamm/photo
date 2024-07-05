import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'

import bodyParser from 'body-parser';

const app = express();
app.use(express.json());
app.use(bodyParser.json())

app.use(cors(
    {
        origin: "http://localhost:3000"
    }
));



const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'lijithj129@gmail.com',
        pass: 'itvgthmkywdmklod',
    },
});

function sendVerificationEmail(userEmail, userFullname, userPhonenumber, EventDate, EventLocation, EventType, Budget, HowHearAboutUs, TellAboutYourEvent) {
    const mailOptions = {
        from: userEmail,
        to: "lijithj786@gmail.com",
        subject: '',
        text: `
        Name : ${userFullname} 
        Email : ${userEmail} 
        Phone : ${userPhonenumber} 
        Event Date : ${EventDate} 
        Event Location : ${EventLocation} 
        Event Type : ${EventType} 
        Budget : ${Budget} 
        How Did Hear About : ${HowHearAboutUs} 
        Tell About The Event: ${TellAboutYourEvent} 
        `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Email verification error: ' + error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}


app.post('/verify-email', (req, res) => {
    const userFullname = req.body.fullname;
    const userEmail = req.body.email;
    const userPhonenumber = req.body.phonenumber;
    const EventDate = req.body.eventDate;
    const EventLocation = req.body.eventLocation;
    const EventType = req.body.eventType;
    const Budget = req.body.budget;
    const HowHearAboutUs = req.body.hearAboutUs;
    const TellAboutYourEvent = req.body.TellAboutEvent;

    console.log('object', userFullname, userEmail, userPhonenumber, EventDate, EventLocation, EventType, Budget, HowHearAboutUs, TellAboutYourEvent)
    console.log('accessed')
    sendVerificationEmail(userEmail, userFullname, userPhonenumber, EventDate, EventLocation, EventType, Budget, HowHearAboutUs, TellAboutYourEvent);

});

let port = 9000
app.listen(port, () => {
    console.log(`Loading Succesfull ${port}`)
})