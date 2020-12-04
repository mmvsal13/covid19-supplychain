const express = require('express');
require('dotenv').config();

const router = express.Router();
const Request = require('../models/Request');


router.get('/', (req, res) => {
    return res.status(200).send("Covid19 Supplychain Request Router")
})

const jsonDefault = {
    "ShipmentID": "Null",
    "Date": "Null",
    "Order": "Null",
    "Quantity": 0,
    "Client": "Null",
    "Tag": "Null",
}

router.post('/sendRequest', (req, res) => {
    let shipID = req.body.ShipmentID;
    let date = req.body.Date;
    let orderID = req.body.Order;
    let quant = req.body.Quantity;
    let user = req.body.Client;
    let newRequest = new Request({
        ShipmentID: shipID,
        Date: date,
        Order: orderID,
        Quantity: quant,
        Client: user,
    });
    newRequest
        .save()
        .then((newRequest) => res.json((data = newRequest)))
        .catch((err) => console.log(err));
});

//Get history of all requests by Client ID
router.get('/getRequestByOwner', async (req, res) => {
    let currClient = req.body.Client;
    try {
        let result = await Request.find({Client: currClient});
        if (result == null) {
            res.send(jsonDefault);
        }
        res.send(result);
    } catch (err) {
        res.send(err);
    }
});

module.exports = router;