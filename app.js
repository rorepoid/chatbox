"use strict";

    // Imports dependencies and set up http server
    const express = require("express"),
    { urlencoded, json } = require("body-parser"),
    crypto = require("crypto"),
    path = require("path"),
    config = require('./src/services/config'),
    app = express();

    app.set('port', config.port)

    // Respond with index file when a GET request is made to the homepage
    app.get("/", function(_req, res) {
        res.send("Hello World");
    });

    // Adds suport for get Requests to our webhook
    app.get("/webhook", (_req, res) => {
        res.sendStatus(403);
    });

    // listen for requests
    const server = app.listen(app.get('port'), () => {
        console.log(`Server on port ${app.get('port')}`);
    });

    module.exports = server;
