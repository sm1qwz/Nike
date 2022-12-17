
var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test')

var schema = mongoose.Schema({ name: String })

schema.methods.meow = function(){
    console.log(this.get("name") + " are good for run ")
}

var Clothing = mongoose.model('Clothing', schema)

var drill = new Clothing({ name: 'Sneakers' })
drill.save(function (err) {
    drill.meow()
})