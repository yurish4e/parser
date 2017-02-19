var express = require('express');
var router = express.Router();

/* GET result page. */
router.get('/result', function(req, res, next) {
 var resultPage = [{name:'first', status:'ok', pages:2, date:'11 june'}, {name:'second', status:'ok', pages:5, date:'31 feb'}, {name:'third', status:'ok', pages:35, date:'22 oct'}, {name:'fourth', status:'ok', pages:4, date:'15 oct'}, {name:'second', status:'ok', pages:5, date:'31 feb'}, {name:'third', status:'ok', pages:35, date:'22 oct'}, {name:'fourth', status:'ok', pages:4, date:'15 oct'}, {name:'second', status:'ok', pages:5, date:'31 feb'}, {name:'third', status:'ok', pages:35, date:'22 oct'}, {name:'fourth', status:'ok', pages:4, date:'15 oct'}];
  res.render('result', { title: '22222', resultPage:resultPage });
});

module.exports = router;
