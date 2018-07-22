var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* get login*/
router.get('/loginFinal', function(req, res, next) {
  res.render('templates/login');
});
/*get app*/
router.get('/app', function(req, res, next) {
  res.render('templates/app');
});


module.exports = router;