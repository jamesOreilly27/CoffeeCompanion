const express = require('express')
const app = express()
const db = require('./db')
const session = require('express-session')
const SequelizeStore = require('connect-session-sequelize')(session.Store)
const passport = require('passport')
const sessionStore = new SequelizeStore({ db })
const chalk = require('chalk')
const path = require('path'); 
const PORT = process.env.PORT || 8332
const https = require('https')
const fs = require('fs')
const dir = require('os').homedir()

app.use(session({
  secret: process.env.SESSION_SECRET || 'Three may keep a secret, if two of them are dead',
  store: sessionStore,
  resave: false,
  saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())

passport.serializeUser((user, done) => done(null, user.id))
passport.deserializeUser((id, done) =>
  db.models.user.findById(id)
    .then(user => done(null, user))
    .catch(done))

const createApp = () => {
  const options = {
    key: fs.readFileSync( `${dir}/ssl/localhost/localhost.key` ),
    cert: fs.readFileSync( `${dir}/ssl/localhost/localhost.crt` ),
    requestCert: false,
    rejectUnauthorized: false
  }

  const server = https.createServer(options, app)

  app.use(`/graphql`, require('./graphql'))

  app.use(express.static(path.join(__dirname, '..', 'public')))
  app.use('/static', express.static(path.join(__dirname, 'public')))
  app.use('*', (req, res, next) => res.sendFile(path.join(__dirname, '..', 'public', 'index.html')))
}

const syncDb = () => db.sync()

const run = () => {
  PORT === 8332 ?
    app.listen(PORT, () => {
      console.log(chalk.blue.bgWhite.bold(`We are live on port ${PORT}`))
      console.log(chalk.red.bgWhite.bold('Now browse to localhost:8332/graphql'))
    })
    :
    server.listen(PORT, () => {
      console.log(chalk.blue.bgWhite.bold(`We are live on port ${server.address().port}`))
      console.log(chalk.red(PORT))
    })
}

if (require.main === module) {
  sessionStore.sync()
    .then(syncDb)
    .then(createApp)
    .then(run)
} else {
  createApp()
}
