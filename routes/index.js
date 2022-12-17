var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Страница кроссовок */
router.get('/sneakers', function(req, res, next) {
  res.send("<h1>Nike Shoes & Sneakers</h1>")
});

/* Страница футболок */
router.get('/tshirts', function(req, res, next) {
  res.send("<h1>Nike Tops & T-Shirts</h1>")
});

/* Страница футболок */
router.get('/pants', function(req, res, next) {
  res.send("<h1>Nike Pants & Tights</h1>")
});

module.exports = router;
