const db = require('../db')
const Sequelize = require('sequelize')

const Bid = db.define('bid', {
  title: {
    type: Sequelize.STRING
  },
  status: {
    type: Sequelize.ENUM('open', 'pending', 'approved', 'declined')
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

module.exports = Bid
