const express = require('express')
const app = express()
const volleyball = require('volleyball')
const bodyParser = require('body-parser')
const chalk = require('chalk')
const path = require('path'); 
const PORT = process.env.PORT || 8332
const https = require('https')
const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql')
const fs = require('fs')
const dir = require('os').homedir()

const options = {
  key: fs.readFileSync( `${dir}/ssl/localhost/localhost.key` ),
  cert: fs.readFileSync( `${dir}/ssl/localhost/localhost.crt` ),
  requestCert: false,
  rejectUnauthorized: false
}

const server = https.createServer(options, app)

app.use(`/graphql`, require('./graphql'))

app.use(volleyball)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(express.static(path.join(__dirname, '..', 'public'))); 

app.use('/static', express.static(path.join(__dirname, 'public')))
app.use('*', (req, res, next) => res.sendFile(path.join(__dirname, '..', 'public', 'index.html')))

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

run()
