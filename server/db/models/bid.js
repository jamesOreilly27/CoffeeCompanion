const db = require('../db')
const Sequelize = require('sequelize')

const Bid = db.define('bid', {
  status: {
    type: Sequelize.ENUM('open', 'sent', 'approved')
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
