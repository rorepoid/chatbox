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
    app.get("/webhook", (req, res) => {
	// Parse the query params
	let mode = req.query["hub.mode"];
	let token = req.query["hub.verify_token"];
	let challenge = req.query["hub.challenge"];

	// Checks if a token and mode are not in the query string of the request
	if (!mode || !token) {
	    return res.sendStatus(403);
	}

	// Checks the mode and token sent is not correct
	if (mode !== "subscribe" || token !== config.verifyToken) {
	    return res.sendStatus(403);
	}

	// Responds with the challenge token from the request
	console.log("WEBHOOK_VERIFIED");
	res.status(200).send(challenge);
    });

	// Creates the endpoint for your webhook
	app.post("/webhook", (req, res) => {
		console.log("post");
		return res.sendStatus(403);
	});
    // listen for requests
    const server = app.listen(app.get('port'), () => {
        console.log(`Server on port ${app.get('port')}`);
    });

    module.exports = server;
