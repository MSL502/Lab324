var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/info', function(req, res, next) {
  res.render('info', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.get('/manage', function(req, res, next) {
  res.render('manage', { title: 'Express' });
});

router.get('/password', function(req, res, next) {
  res.render('password', { title: 'Express' });
});

router.get('/person', function(req, res, next) {
  res.render('person', { title: 'Express' });
});

router.get('/task', function(req, res, next) {
  res.render('task', { title: 'Express' });
});

router.get('/taskDetail', function(req, res, next) {
  res.render('taskDetail', { title: 'Express' });
});



module.exports = router;
