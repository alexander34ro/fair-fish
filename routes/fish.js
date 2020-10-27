var express = require('express');
var router = express.Router();

router.get('/:name', function (req, res, next) {
  res.render('fish', { title: req.params.name });
});

module.exports = router;
