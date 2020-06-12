const Sequelize = require('sequelize')
const db = require('../db')


const Cart = db.define('cart', {
  status: {
    type: Sequelize.ENUM('open', 'purchased', 'shipped')
  },
  createdAt: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW
  },
  updatedAt: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW
  }
})

module.exports = Cart
