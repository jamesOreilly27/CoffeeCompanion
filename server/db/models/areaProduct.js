const Sequelize = require('sequelize')
const db = require('../db')

const AreaProduct = db.define('area-product', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  qty: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = AreaProduct
