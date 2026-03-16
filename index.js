const express = require("express")
const app = express()
const path = require("path")
const hbs = require("hbs")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.set("view engine", "hbs")
app.set("views", path.join(__dirname, 'views'))

// GET routes
app.get("/", (req, res) => {
    res.render("BaseCamp")
})

// POST routes
app.post("/login", (req, res) => {
    const { username, password } = req.body
    res.redirect("/")
})

app.post("/register", (req, res) => {
    const { username, email, password } = req.body
    res.redirect("/")         // ✅ sends user back to login page
})

app.listen(3000, () => {
    console.log("server running on http://localhost:3000")
})