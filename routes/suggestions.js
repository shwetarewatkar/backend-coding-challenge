var express = require('express');
var router = express.Router();

/* GET suggestions listing. */
router.get('/', function(req, res, next) {
    res.send('listing all suggestions');
  });  

module.exports = router;