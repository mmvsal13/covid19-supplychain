const express = require('express');
require('dotenv').config();

const router = express.Router();

//Load TokenBox Model
const TokenBox = require("../models/TokenBox")

router.get('/', (req, res) => {
    return res.status(200).send("Covid19 Supplychain Token Router")
})

//later add auth variable to check who sent it
// Create TokenBox
// also need to mint token from TokenOwnership
router.post("/createTokenBox", (req, res) => {
    let vCount = req.body.vaccineCount;
    let stat = req.body.status;
    let Id = req.body.tokenId;
    let prevOwners = req.body.previousOwners;
    let currOwner = req.body.currentOwner;
    let newTokenBox = new TokenBox({
        vaccineCount: vCount,
        status: stat,
        tokenId: Id,
        previousOwners: prevOwners,
        currentOwner: currOwner
    })
    newTokenBox.save().then(newTokenBox => res.json(data = newTokenBox)).catch(err => console.log(err))
})

//Do we need to update all of this address info each time we deploy a new contract?
// This might be good: https://medium.com/coinmonks/ethereum-tutorial-sending-transaction-via-nodejs-backend-7b623b885707

*/
// I'm not sure which one we should be using
// Get All TokenBox Data for Regulator to see
router.get("/getAllTokenBox", (req, res) => {
    TokenBox.find({}, (err, result) => {
        if (err) {
            res.send(err)
        } else {
            res.send(result)
        }
    })
})

//Get TokenBox by Owner 
router.get("/getTokenBoxByOwner", (req, res) => {
    let currOwner = req.body.currentOwner
    TokenBox.find({currOwner: currentOwner}, (err, result) => {
        if (err) {
            res.send(err)
        } else {
            res.send(result)
        }
    })
})

//get all TokenBox by recent transfer date
router.get("/getAllTokenBoxRecentOrder", (req, res) => {
    let currOwner = req.body.currentOwner
    TokenBox
// Query Date obj: https://mongoosejs.com/docs/tutorials/dates.html
        .find({}).sort({recentTransferDate: -1 }, (err, result) => {
            if (err) {
                res.send(err)
            } else {
                res.send(result)
            }
    })
})

module.exports = router;