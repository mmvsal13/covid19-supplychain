const express = require('express');
require('dotenv').config();

const router = express.Router();
import { User } from '../../models/Accounts.js'; 

router.get('/', (req, res) => {
    return res.status(200).send("Covid19 Supplychain Auth Router")
})

//checking in backend if there is an account 
//router.route('/').post(controller.create)

module.exports = router;