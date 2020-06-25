const express = require('express')
const server = express()

const nunjucks = require("nunjucks")

const videos = require("./data")

server.use(express.static('public/styles'))
server.use(express.static('public/assets'))
server.use(express.static('src/scripts'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function (req, res) {
    const about = {
        avatar_url: "https://avatars1.githubusercontent.com/u/63468436?s=460&u=3fe614e09a9f62c607788347afda48c129750cac&v=4",
        name: "Abner Pena de Souza",
        role: 'Support Engineer in - <a href="http://dropreal.com/" target="_blank">DropReal</a>',
        school: 'Student in - <a href="http://rocketseat.com.br/" target="_blank">Rocketseat</a>',
        office: "Web Developer Enthusiast",
        links: [
            { name: "Github", url: "https://github.com/abnerpsouza99" },
            { name: "LinkedIn", url: "https://www.linkedin.com/in/abnerpenadesouza/" }
        ]
    }


    return res.render("about", { about })
})

server.get("/classes", function (req, res) {
    return res.render("classes", { items: videos })
})

server.get("/contents", function (req, res) {

    let contents = [
        {
            id: "starter",
            image: "https://skylab.rocketseat.com.br/static/64c237ccff807c054339a62d53b4b402.svg",
            title: "Starter",
            modules: "5 módulos",
            price: "FREE"
        },
        {
            id: "launchbase",
            image: "https://skylab.rocketseat.com.br/static/0828532024cb46921a6b5e941f8d788d.svg",
            title: "LaunchBase",
            modules: "7 fases com diversos módulos",
            price: "R$960,00"
        },
        {
            id: "gostack",
            image: "https://skylab.rocketseat.com.br/static/83a178a0653dab1d55e2ed7946465975.svg",
            title: "GoStack",
            modules: "10 fases com diversos módulos",
            price: "R$1.000,00"
        }
    ]


    return res.render("contents", { contents: contents })
})

server.get("/aboutRocketseat", function (req, res) {
    return res.render("aboutRocketseat")
})

server.get("/not-found", function (req, res) {
    return res.render("not-found")
})

server.get("/video", function (req, res) {
    const id = req.query.id

    const video = videos.find(function (video) {
        return video.id == id
    })

    if (!video) {
        res.send("Video not found!")
    }

    return res.render("video", { item: video })
})

server.use(function (req, res) {
    res.status(404).render("not-found");
});

// Comand to turn-on server
server.listen(5000, function () {
    console.log("Server is running!")
})