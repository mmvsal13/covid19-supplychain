require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authRouter = require('./routes/authRouter');
const requestRouter = require('./routes/requestRouter');
const tokenRouter = require('./routes/tokenRouter');
const cors = require('cors');

const port = process.env.PORT ? process.env.PORT : 4000;

const uri =
    'mongodb+srv://expendable-1:Xt5hO3RmPoeeWzTL@cluster0.egngy.mongodb.net/test?retryWrites=true&w=majority';
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
    .connect(uri, {
        useNewUrlParser: true,
    })
    .catch((err) => {
        console.log('Mongodb first connection failed: ' + err.stack);
    });

const connection = mongoose.connection;

connection.once('open', function () {
    console.log('Connection with MongoDB was successful');
});

app.use('/api/auth/', authRouter);
app.use('/api/request/', requestRouter);
app.use('/api/token/', tokenRouter);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

module.exports = { app };

// Routes
//not sure if we need routes

//one click registration
//user clicks sign in button, fetch an api call to get the user's randomly
//generated nonce, if it doenst return anything, get them to sign up
//check whether or not the address is registered
//if not, redirect to a login page

//require metamask
const Web3 = require('web3');
const ethEnabled = () => {
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        window.ethereum.enable();
        return true;
    }
    return false;
};
