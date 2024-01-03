/////////////////////////
//Import our dependencies
/////////////////////////
require("dotenv").config() //load .env variables
const express = require("express") // our web framework
const morgan = require("morgan") // our logger
const methodOverride = require("method-override") // override forms
const mongoose = require("mongoose") // connect to our mongoosedb

/////////////////////
//DATABASE Connection
/////////////////////
//Our database connection string
const DATABASE_URL = process.env.DATABASE_URL

//establish our connection
mongoose.connect(DATABASE_URL)

//Events for when the connection changes
mongoose.connection
.on("open", () => {console.log("connected to Mongo")})
.on("close", () => {console.log("Disconnected to Mongo")})
.on("error", (error) => {console.log(error)})