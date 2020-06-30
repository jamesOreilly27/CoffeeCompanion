const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
   },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { notEmpty: true }
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: { notEmpty: true }
  },
  cost: {
    type: Sequelize.INTEGER
  },
  price: {
    type: Sequelize.INTEGER
  },
  image: {
    type: Sequelize.STRING
  },
  featured: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

module.exports = Product
