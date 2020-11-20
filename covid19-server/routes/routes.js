const express = require("express");
const router = express.Router();

// Load companyAccount model
const ExchangeRate = require("../models/companyAccount.js")


// Make some sort of call we Account
router.get("/", (req, res) => {
    ExchangeRate.find({}, (err, result) => {
        if (err) {
            res.send(err)
        } else {
            res.send(result)
        }
    })
})

// Create an account
/*
router.post("/Register", (req, res) => {
    let fromCurr = req.body.fromCurrency;
    let toCurr = req.body.toCurrency;
    let convRate = req.body.conversionRate;
    let newExchangeRate = new ExchangeRate({
        fromCurrency: fromCurr,
        toCurrency: toCurr,
        exchangeRate: convRate,
    })
    newExchangeRate.save().then(newExchangeRate => res.json(data = newExchangeRate)).catch(err => console.log(err))
})
*/


module.exports = router;