const Sequelize = require('sequelize')
const db = require('../db')

const LineItem = db.define('item', {
  price: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = LineItem
