var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var infoPage = {
      all_projects:15,
      complete_projects:9,
      pending_projects:3
  }; 
    var tasks=[{t:'ddddd'},{t:'ddddd'}];    
  res.render('index', { title: 'Express111111111111', data: infoPage, tasks:tasks });
});

module.exports = router;
