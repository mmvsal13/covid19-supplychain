const express = require('express');
require('dotenv').config();

const router = express.Router();
const companyAccount = require("../models/companyAccount")

router.get('/', (req, res) => {
    return res.status(200).send("Covid19 Supplychain Auth Router")
})

//

module.exports = router;