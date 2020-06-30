const Sequelize = require('sequelize')
const db = require('../db')

const BidArea = db.define('bid-area', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = BidArea
