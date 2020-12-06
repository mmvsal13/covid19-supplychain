const express = require('express');
require('dotenv').config();

const router = express.Router();
const Request = require('../models/Request');


router.get('/', (req, res) => {
    return res.status(200).send("Covid19 Supplychain Request Router")
});


router.post('/sendRequest', (req, res) => {
    let id = req.body.ID;
    let shipID = req.body.ShipmentID;
    let date = req.body.Date;
    let orderID = req.body.Order;
    let quant = req.body.Quantity;
    let user = req.body.Client;
    let tag = req.body.Tag;
    let newRequest = new Request({
        ID: id,
        ShipmentID: shipID,
        Date: date,
        Order: orderID,
        Quantity: quant,
        Client: user,
        Tag: tag,
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

//Get all requests for a single user NOT FUNCTIONAL YET
router.get('/getRequestsByOwner', async (req, res) => {
    let currUser = req.body.Client;
    try {
        let requests = await Request.find({ Client: currUser }).sort({ Quantity: -1 });
        return res.status(200).json({ requests });
    } catch (e) {
        return res.status(500).send(e.message);
    }
});

//Gets a certain type of request(All pending, all approved, all denied) NOT FUNCTIONAL YET
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
router.delete('/deleteByID', async (req, res) => {
    let id = req.body.ID;
    Request.Remove({ ID: id }, function(err) {
        if (!err) {
            return res.send('User deleted!');
        } else {
            return res.send('Error deleting user!');
        }
    });

});
   


module.exports = router;