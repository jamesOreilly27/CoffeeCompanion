const db = require('../db')
const Sequelize = require('sequelize')

const Bid = db.define('bid', {
  title: {
    type: Sequelize.STRING
  },
  status: {
    type: Sequelize.ENUM('open', 'pending', 'approved', 'declined')
  },
  laborRate: {
    type: Sequelize.INTEGER,
    defaultValue: 65
  },
  laborTotal: {
    type: Sequelize.FLOAT,
    defaultValue: 0
  },
  hasHeaderImage: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
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
