const express = require('express');
require('dotenv').config();
const multer = require('multer');
const router = express.Router();
const fs = require('fs');
const Papa = require('papaparse');
const Transaction = require('../models/Transaction');
const TokenBox = require('../models/TokenBox');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
        // You could rename the file name
        // cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))

        // You could use the original name
        cb(null, file.originalname);
    },
});

var upload = multer({ storage: storage });

router.get('/', (req, res) => {
    return res.status(200).send('Covid19 Supplychain Token Router');
});

//later add auth variable to check who sent it
// Create TokenBox
// also need to mint token from TokenOwnership
router.post('/createTokenBox', (req, res) => {
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
        currentOwner: currOwner,
    });
    newTokenBox
        .save()
        .then((newTokenBox) => res.json((data = newTokenBox)))
        .catch((err) => console.log(err));
});

//Do we need to update all of this address info each time we deploy a new contract?
// This might be good: https://medium.com/coinmonks/ethereum-tutorial-sending-transaction-via-nodejs-backend-7b623b885707

// Get All TokenBox Data for Regulator to see
router.get('/getAllTokenBox', (req, res) => {
    TokenBox.find({}, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});

//Get TokenBox by Owner
router.get('/getTokenBoxByOwner', (req, res) => {
    let currOwner = req.body.currentOwner;
    TokenBox.find({ currOwner: currentOwner }, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});

//get all TokenBox by recent transfer date
router.get('/getAllTokenBoxRecentOrder', (req, res) => {
    let currOwner = req.body.currentOwner;
    TokenBox
        // Query Date obj: https://mongoosejs.com/docs/tutorials/dates.html
        .find({})
        .sort({ recentTransferDate: -1 }, (err, result) => {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        });
});

router.post('/uploadCSV', upload.single('csv'), (req, res) => {
    return res.json({
        csv: req.file.path,
    });
});

router.post('/batchTransferTokens', async (req, res) => {
    const { csv, recipient } = req.body;
    if (!csv) {
        return res.status(400).json({ csv: 'CSV path not found' });
    } else if (!recipient) {
        return res.status(400).json({ recipient: 'Recipient not found' });
    }

    try {
        const file = fs.readFileSync(csv, 'utf-8');
        const { data } = Papa.parse(file);

        let promises = data[0].map(async (val) => {
            let token = TokenBox.find({ tokenId: val });
            token.previousOwners.push(token.currentOwner);
            token.currentOwner = recipient;
            token.recentTransferDate = new Date();
            await token.save();
        });
        await Promise.all(promises);

        let newTransaction = new Transaction({
            from: 'tbd',
            to: recipient,
            date: new Date().toISOString(),
            tokenId: data[0],
        });
        await newTransaction.save();
    } catch (err) {
        console.log(err);
        return res.status(500).send(err);
    }

    return res.status(200).json({ success: true });
});

module.exports = router;
