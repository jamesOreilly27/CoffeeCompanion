const db = require('../db')
const Sequelize = require('sequelize')

const RawMaterial = db.define('raw-material', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  unit: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  pricePerUnit: Sequelize.STRING,
  allowNull: false
})

module.exports = RawMaterial
