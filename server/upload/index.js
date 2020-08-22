const express = require('express')
const router = express.Router()
const header = require('./header')
const product = require('./product')

router.use('/header', header)
router.use('/product', product)

module.exports = router
