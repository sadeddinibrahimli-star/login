const express = require("express")
const app = express()
const path = require("path")
const hbs = require("hbs")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public'))) // 👈 this serves CSS/JS

app.set("view engine", "hbs")
app.set("views", path.join(__dirname, 'views'))

app.get("/", (req, res) => {
    res.render("BaseCamp")
})
app.get("/signup", (req, res) => {
    res.render("signup")
})

app.listen(3000, () => {
    console.log("server running on http://localhost:3000")
})
