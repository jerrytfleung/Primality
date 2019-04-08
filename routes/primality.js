const express = require('express');
const router = express.Router();

router.get('/:number', function (req, res) {
  if (isNaN(req.params.number)) {
    res.json(req.params.number + " is NaN.");

  } else {
    res.json({
      Number: parseInt(req.params.number, 10),
      Primality: primality(Number(req.params.number))
    });
  }

});

function primality(num) {
  if (num <= 1) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  let i = 2;
  while (i * i < num) {
    if (num % i === 0) {
      return false;
    }
    i++;
  }
  return num % i !== 0;

}

module.exports = router;
