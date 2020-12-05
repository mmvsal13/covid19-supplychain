const express = require('express');
require('dotenv').config();

const router = express.Router();
const Request = require('../models/Request');


router.get('/', (req, res) => {
    return res.status(200).send("Covid19 Supplychain Request Router")
});


router.post('/sendRequest', (req, res) => {
    let shipID = req.body.ShipmentID;
    let date = req.body.Date;
    let orderID = req.body.Order;
    let quant = req.body.Quantity;
    let user = req.body.Client;
    let id = req.body.Key;
    let tag = reg.body.Tag;
    let newRequest = new Request({
        ShipmentID: shipID,
        Date: date,
        Order: orderID,
        Quantity: quant,
        Client: user,
        Tag: tag,
        Key: id,
    });
    newRequest
        .save()
        .then((newRequest) => res.json((data = newRequest)))
        .catch((err) => console.log(err));

    return res.json({
        success: true,
    });
});

//Get history of all requests
router.get('/getRequests', async (req, res) => {
    try {
        let requests = await Request.find({}).sort({ Quantity: -1 });
        return res.status(200).json({requests});
    } catch (e) {
        return res.status(500).send(e.message);
    }
});

//Get all requests for a single user 
router.get('/getRequestsByOwner', async (req, res) => {
    let currUser = req.body.Client;
    try {
        let requests = await Request.find({ Client: currUser }).sort({ Quantity: -1 });
        return res.status(200).json({ requests });
    } catch (e) {
        return res.status(500).send(e.message);
    }
});

//Gets a certain type of request(All pending, all approved, all denied)
router.get('/getAllStatusRequests', async (req, res) => {
    let status = req.body.Tag;
    try {
        let requests = await Request.find({ Tag: status }).sort({ Quantity: -1 });
        return res.status(200).json({ requests });
    } catch (e) {
        return res.status(500).send(e.message);
    }
});

//Gets a request by its key
router.get('/getRequestByKey', async (req, res) => {
    let id = req.body.Key;
    try {
        let requests = await Request.find({ Key: id }).sort({ Quantity: -1 });
        return res.status(200).json({ requests });
    } catch (e) {
        return res.status(500).send(e.message);
    }
});


module.exports = router;