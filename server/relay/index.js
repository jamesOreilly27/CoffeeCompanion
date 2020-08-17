const express = require('express')
const router = express.Router()
const axios = require('axios')
const convert = require('xml-js')

const webRelay = axios.create({
  baseURL: '',
  timeout: 1000,
  headers: {
    'Authorization': 'Basic YWRtaW46ZnNzNjMxOTc3',
    'X-Requested-With': 'XMLHttpRequest'
  }
})

router.get('/read-state/:port', (req, res, next) => {
  webRelay.get(`http://192.168.0.215:${req.params.port}/stateFull.xml`)
  .then(res => convert.xml2js(res.data, { compact: true, spaces: 4 } ))
  .then(states => res.json(states))
  .catch(err => console.log(err))
})

router.get('/turn-on/:port/:relay', (req, res, next) => {
  webRelay.get(`http://192.168.0.215:${req.params.port}/stateFull.xml?relay${req.params.relay}State=1`)
  .then(res => convert.xml2js(res.data, { compact: true, spaces: 4 } ))
  .then(states => res.json(states))
  .catch(err => console.log(err))
})

router.get('/turn-off/:port/:relay', (req, res, next) => {
  webRelay.get(`http://192.168.0.215:${req.params.port}/stateFull.xml?relay${req.params.relay}State=0`)
  .then(res => convert.xml2js(res.data, { compact: true, spaces: 4 } ))
  .then(states => res.json(states))
  .catch(err => console.log(err))
})

module.exports = router
