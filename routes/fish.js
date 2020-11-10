var express = require('express');
var router = express.Router();

const Fish = require("../models/fish");

router.get('/:name', function (req, res, next) {
  const name = req.params.name;
  Fish.findOne({ name: name}).then(fish => {
    res.render('fish', { title: fish.name });
  }).catch(err => {
    res.status(500).json({ err });
  });
});

module.exports = router;
