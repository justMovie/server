'use strict';

const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const jwt = require('../helpers/jwt');

class gsigninController {
    static signin(req, res, next) {
        client.verifyIdToken({
            idToken: req.body.id_token,
            audience: process.env.GOOGLE_CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
                                  // Or, if multiple clients access the backend:
                                  // [CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
        })
        .then(ticket => {
            const { email } = ticket.getPayload();
            const token = jwt.generateToken({email});
            res.status(200).json({ token });
        })
        .catch(next);
    }
}

module.exports = gsigninController;