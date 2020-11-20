const express = require('express')
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")
const port = 4000
const mongoose = require("mongoose")

const uri = "mongodb+srv://expendable-1:Xt5hO3RmPoeeWzTL@cluster0.egngy.mongodb.net/test?retryWrites=true&w=majority"
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

mongoose.connect(uri, {
  useNewUrlParser: true
}).catch(err => {
    console.log("Mongodb first connection failed: " + err.stack);
});

const connection = mongoose.connection;

connection.once("open", function() {
  console.log("Connection with MongoDB was successful");
});

// Routes
//app.use("/route", exchangeRates)

// Listen on Port 4000
app.listen(port, function() {
  console.log("Server is running on Port: " + port);
});

//one click registration
//user clicks sign in button, fetch an api call to get the user's randomly 
//generated nonce, if it doenst return anything, get them to sign up
//check whether or not the address is registered
//if not, redirect to a login page

//require metamask
const Web3 = require("web3");
const ethEnabled = () => {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    window.ethereum.enable();
    return true;
  }
  return false;
}
