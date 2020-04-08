var express = require('express');
var router = express.Router();

/* GET page. */
router.get('/', function(req, res, next) {
  console.log("get");  

  var temp_geoJson = '/data/info.geojson';

  res.render('index', { geourl: temp_geoJson });
});

router.get('/geourl', function(req, res, next) {
  console.log("get");  

  res.render('index', { geourl: req.query.url });
});


module.exports = router;
