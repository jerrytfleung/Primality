var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  if (isNaN(req.query.number)) {
    res.json(req.query.number + " is NaN.");

  } else {
    res.json({
      Number: parseInt(req.query.number, 10),
      Primality: primality(req.query.number)
    });
  }

});

function primality(num) {
  if (num <= 1) {
    return false;
  }
  if (num == 2) {
    return true;
  }
  var i = 2;
  while (i * i < num) {
    if (num % i == 0) {
      return false;
    }
    i++;
  }
  if (num % i == 0) {
    return false;
  }
  return true;
}

module.exports = router;
