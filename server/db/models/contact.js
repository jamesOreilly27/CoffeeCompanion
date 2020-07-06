const db = require('../db')
const Sequelize = require('sequelize')

const Contact = db.define('contact', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  phoneNumber: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING
  },
  primary: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

module.exports = Contact