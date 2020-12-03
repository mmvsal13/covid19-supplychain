const express = require('express');
require('dotenv').config();

const router = express.Router();

router.get('/', (req, res) => {
    return res.status(200).send("Covid19 Supplychain Auth Router")
})

exports.requireRole = function(role) {
    return function(req, res, next) {
      if (req.user && req.user.role === role) next();
      else
          res.send(404);
    }
}

//

module.exports = router;