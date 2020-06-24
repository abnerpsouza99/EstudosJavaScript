const express = require('express')
const server = express()

const nunjucks = require("nunjucks")

server.use(express.static('public/styles'))
server.use(express.static('public/assets'))
server.use(express.static('src/scripts'))

server.set("view engine", "html")

nunjucks.configure("views", { express: server })


server.get("/", function(req, res){
    return res.render("about")
})

server.get("/classes", function(req, res){
    return res.render("classes")
})

server.get("/contents", function(req, res){
    return res.render("contents")
})

server.get("/aboutRocketseat", function(req, res){
    return res.render("aboutRocketseat")
})

// Comand to turn-on server
server.listen(5000, function(){
    console.log("Server is running!")
})