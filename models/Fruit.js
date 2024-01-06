//////////////////
//Import Dependencies and Connection
//////////////////
const mongoose = require("./connection")

////////////////
// Create Our Fruits Model
///////////////
//Destructure Schema and Model into their own variables
const {Schema, model} = mongoose
// const Schema = mongoose.Schema
// const model = mongoose.model
// ^^^^Same thing as above ^^^^

//Schema - Shape of the Data
const fruitSchema = new Schema({
    name: String,
    color: String,
    readyToEat: Boolean,
    username: String
})

//Model - object for interacting with the db
const Fruit = model("Fruit", fruitSchema)

//////////////////
//Export the Model
//////////////////
module.exports = Fruit