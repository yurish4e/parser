var express = require('express');
var router = express.Router();

/* GET result page. */
router.get('/forms', function(req, res, next) {
res.render('forms', { title: '3333333' });
});

module.exports = router;
