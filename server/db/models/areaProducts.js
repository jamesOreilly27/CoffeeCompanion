const Sequelize = require('sequelize')
const db = require('../db')

const AreaProducts = db.define('area-products', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }
})

module.exports = AreaProducts
