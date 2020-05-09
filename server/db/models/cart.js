const Sequelize = require('sequelize')
const db = require('../db')
const Item = require('./lineitem')


const Cart = db.define('cart', {
  status: {
    type: Sequelize.ENUM('open', 'purchased', 'shipped')
  }
})

module.exports = Cart
