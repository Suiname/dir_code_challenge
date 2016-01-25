var express = require('express');
var router = express.Router();
var model = require('../models/Survey');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('survey');
});

router.get('/survey', function(req,res,next){
  res.render('survey', { title: 'Survey for WDI' });
});

router.post('/survey', function(req,res,next){
  model.create(req.body, function (err, survey) {
    if (err){
      res.json(errorMessage(err));
    } else {
      res.redirect('thanks');
    }
  });
});

router.get('/thanks', function(req,res,next){
  res.render('thanks', { title: "Thanks for your feedback!"});
});

module.exports = router;
