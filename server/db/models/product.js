const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  vendor: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { notEmpty: true }
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { notEmpty: true }
  },
  partNumber: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { notEmpty: true }
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  cost: {
    type: Sequelize.DECIMAL
  },
  price: {
    type: Sequelize.DECIMAL
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
