const Sequelize = require('sequelize')
const db = require('../db')

const ProductCategory = db.define('product-category', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }
})

module.exports = ProductCategory
