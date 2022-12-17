var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Страница кроссовок */
router.get('/sneakers', function(req, res, next) {
  res.render('nike', {
    title: "Nike Shoes & Sneakers",
    picture: "images/shoes.png",
    desc: "Nike shoes are lightweight and durable. Despite provides exceptional comfort, flexibility, of Nike shoes are very light. If you buy a pair of Nike shoes for specific sports, you will definitely reap the benefits for a long time."
  })
  res.send("<h1>Nike Shoes & Sneakers</h1>")
});

/* Страница  футболок */
router.get('/tshirts', function(req, res, next) {
  res.render('nike', {
    title: "Nike Tops & T-Shirts",
    picture: "images/tshirt.jpg",
    desc: "A T-shirt (also spelled tee shirt), or tee, is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally, it has short sleeves and a round neckline, known as a crew neck, which lacks a collar. T-shirts are generally made of a stretchy, light, and inexpensive fabric and are easy to clean."
  })
  res.send("<h1>Nike Tops & T-Shirts</h1>")
});

/* Страница брюк и спорт.штанов */
router.get('/pants', function(req, res, next) {
  res.render('nike', {
    title: "Nike Pants & Tights",
    picture: "images/pants.png",
    desc: "For warmth that doesn't compromise breathability, choose trousers and tights from Nike. Whether you're running or training, you'll experience intense comfort in designs that let you step, bend and lunge towards your goals. Keep warm, stay focused"
  })
  res.send("<h1>Nike Pants & Tights</h1>")
});
module.exports = router;
