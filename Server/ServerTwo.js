if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
  }
  
  const express = require('express')
  const app = express()
  const bodyParser = require('body-parser')
  const db = require('./queries')
  const bcrypt = require('bcrypt')
  const passport = require('passport')
  const flash = require('express-flash')
  const session = require('express-session')
  const methodOverride = require('method-override')
  
  app.use(bodyParser.json())
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  )

  const user = []
  
  const initializePassport = require('./passport-config')
  initializePassport(
    passport,
    email => user.find(user => user.email === email),
    id => user.find(user => user.id === id)
  )
  
  app.set('view-engine', 'ejs')
  app.use(express.static('../public'))
  app.use(express.urlencoded({ extended: false }))
  app.use(flash())
  app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  }))
  app.use(passport.initialize())
  app.use(passport.session())
  app.use(methodOverride('_method'))

  app.get('/users', db.getUsers)
  app.get('/users/:id', db.getUserById)
  app.post('/users', db.createUser)
  app.put('/users/:id', db.updateUser)
  app.delete('/users/:id', db.deleteUser)
  
  app.get('/', (req, res) => {
    res.render('HomePage.ejs')
  })

  app.get('/login', checkNotAuthenticated, (req, res) => {
    res.render('login.ejs')
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
  
  app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
  }))
  
  app.get('/register', checkNotAuthenticated, (req, res) => {
    res.render('register.ejs')
  })
  
  app.post('/register', checkNotAuthenticated, async (req, res, data) => {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10)
      user.push({
        id: Date.now().toString(),
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
      })
      res.redirect('/login')
    } catch {
      res.redirect('/register')
    }
  })
  
app.delete('/logout', (req, res, next) => {
  req.logOut((err) => {

    if (err) {

      return next(err);

    }
    res.redirect('/login');

  });
});
  
  function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return res.redirect('login')
    }
    next()
  }
  
  app.listen(5000)
