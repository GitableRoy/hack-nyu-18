var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Test = require('../models/Test.js');

/* GET /test listing. */
// router.get('/', function(req, res, next) {
//   Test.find(function (err, test) {
//     if (err) return next(err);
//     res.json(test);
//   });
// });

/* POST /test */
router.post('/', function(req, res, next) {
  Test.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
