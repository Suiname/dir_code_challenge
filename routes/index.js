var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Survey for WDI' });
});

router.get('/survey', function(req,res,next){
  res.render('survey', { title: 'Survey for WDI' });
})

module.exports = router;
