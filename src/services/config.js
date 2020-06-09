"use strict";

// use dotenv to read .env vars into Node
require("dotenv").config();

module.exports = {
    port: process.env.PORT || 3000,
}