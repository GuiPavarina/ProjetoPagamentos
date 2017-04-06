//utilizando o ECMAscript 2015 (ES6)
//constante para armazenar a porta do backend
const port = 3003

//Body-Parser para interpretar o corpo do html
const bodyParser = require('body-parser')

//Framework web
const express = require('express')

//criando servidor
const server = express()

//urlencoded - formato que vem a submissão de um formulário. Extended:true - recebe mais dados.
//toda requisão passará por essse middlewares
server.use(bodyParser.urlencoded({ extended : true }))

//transforma o json em um objeto 
server.use(bodyParser.json())

server.listen(port, function(){
	console.log(`BACKEND is running on port ${port}.`)
})

module.exports = server