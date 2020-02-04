const express = require('express');
const app = express();


const credentials = {
    client: {
        id: process.env.VUE_APP_CLIENT_ID,
        secret: process.env.VUE_APP_CLIENT_SECRET
    },
    auth: {
        tokenHost: "https://us.battle.net"
    }
};
const oauth2 = require('simple-oauth2').create(credentials);

let token = null;

const getToken = () => {
    if(token === null || token.expired()) {
        return oauth2.clientCredentials
            .getToken()
            .then(oauth2.accessToken.create)
            .then(t => {
                token = t;
                return t.token.access_token;
            });
    } else {
        return Promise.resolve(token.token.access_token);
    }
};