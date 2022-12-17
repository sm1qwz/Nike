var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test')

var Сlothing = mongoose.model('Сlothing', { name: String })

var drill = new Сlothing({ name: 'Sneakers' })
drill.save(function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log(' Nike shoes are lightweight and durable')
    }
})