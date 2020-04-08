var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("get");
  console.log(req.query.url);

  res.render('index', { url: req.query.url });
});


module.exports = router;
