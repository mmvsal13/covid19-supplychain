const express = require('express');
require('dotenv').config();

const router = express.Router();

router.get('/', (req, res) => {
    return res.status(200).send("Covid19 Supplychain Token Router")
})

module.exports = router;