const db = require('../db')
const Sequelize = require('sequelize')

const Customer = db.define('customer', {
  companyName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  industry: {
    type: Sequelize.STRING,
  },
  address: {
    type: Sequelize.STRING
  },
  town: {
    type: Sequelize.STRING
  },
  zipCode: {
    type: Sequelize.STRING
  },
  phoneNumber: {
    type: Sequelize.STRING
  },
  localPolicePhone: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Customer
