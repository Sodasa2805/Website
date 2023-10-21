const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.set('view-engine', 'ejs')
app.use(express.static('../public'))
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.render('HomePage.ejs')
})

app.get('/Home', (req, res) => {
    res.redirect('/')
})

app.get('/Archive', (req, res) => {
    res.render('Archive.ejs')
})

app.get('/Characters', (req, res) => {
    res.render('Characters.ejs')
})

app.get('/Characters/TM', (req, res) => {
    res.render('TheMutts.ejs')
})

app.get('/Characters/SC', (req, res) => {
    res.render('SC.ejs')
})

app.get('/Characters/Others', (req, res) => {
    res.render('Others.ejs')
})

app.get('/Characters/Spoilers', (req, res) => {
    res.render('Spoilers.ejs')
})

app.get('/Characters/AnB', (req, res) => {
    res.render('AnB.ejs')
})

app.get('/About', (req, res) => {
    res.render('About.ejs')
})

app.get('/1.1', (req, res) => {
    res.render('FirstComicPage.ejs')
})

app.get('/1.2', (req, res) => {
    res.render('RandomPage.ejs')
})

app.get('/1.3', (req, res) => {
    res.render('LastestPage.ejs')
})

app.listen(5000)