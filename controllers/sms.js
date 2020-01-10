"use strict"

require('dotenv').config()
const smsAccountSid = process.env.SMS_ACCOUNTS_ID; 
const smsAuthToken = process.env.SMS_AUTH_TOKEN; 
const client = require('twilio')(smsAccountSid, smsAuthToken)

class SmsController {
    static sendSms(req, res, next) {
        client.messages 
            .create({ 
                body: req.body.body, 
                from: 'whatsapp:+14155238886',       
                to: `whatsapp:${req.body.to}` 
            }) 
            .then(message => {
                res.status(201).json(message)
            }) 
            .catch(err => {
                console.error(err);
            })
    }
}

module.exports = SmsController;