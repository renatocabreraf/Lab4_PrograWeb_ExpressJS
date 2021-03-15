var express = require('express') //llamamos a Express
var app = express()               

var port = process.env.PORT || 8087  // establecemos nuestro puerto

app.get('/', function(req, res) {
  res.json({ mensaje: 'Método get' })   
})

app.post('/', function(req, res) {
  res.json({ mensaje: 'Método post' })   
})

app.put('/', function(req, res){
    res.json({ mensaje: 'Método put'})
})

app.patch('/', function(req, res){
    res.json({ mensaje: 'Método patch'})
})

app.del('/', function(req, res) {
  res.json({ mensaje: 'Método delete' })  
})


// iniciamos nuestro servidor
app.listen(port)
console.log('API escuchando en el puerto ' + port)