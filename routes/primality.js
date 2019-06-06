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
  if (num < 2) {
    return false;
  }
  let sqrt = Math.sqrt(num);
  for (let i = 2; i <= sqrt; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

module.exports = router;
