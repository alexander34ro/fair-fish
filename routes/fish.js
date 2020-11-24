var express = require('express');
var router = express.Router();

const Fish = require("../models/fish");

router.get('/:name', function (req, res, next) {
  const name = req.params.name;
  Fish.findOne({ name: name}).then(fish => {
    let rating = [];
    for (let i = 0; i < fish.rating; i++) rating.push(1);
    for (let i = fish.rating; i < 5; i++) rating.push(0);
    res.render('fish', { title: fish.name, location: fish.location, rating: rating, risk: fish.risk });
  }).catch(err => {
    res.status(500).json({ err });
  });
});

module.exports = router;
