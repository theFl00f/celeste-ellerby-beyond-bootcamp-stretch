var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res) {
  // console.log(req.headers)
  console.log(req.headers)
  res.render('index', { title: 'Express' });
});


module.exports = router;
