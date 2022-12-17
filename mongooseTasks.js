
var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test')
var Clothing = require("./models/clothing").Clothing


var clothing = new Clothing({
title: "Sneakers",
nick: "sneakers"
})


console.log(clothing)
clothing.save(function(err, clothing, affected){
console.log(clothing.title)
})