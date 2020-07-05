const Sequelize = require('sequelize')
const db = require('../db')

const AreaProduct = db.define('area-product', {
  price: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  cost: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  qty: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = AreaProduct
