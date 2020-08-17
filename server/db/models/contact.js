const db = require('../db')
const Sequelize = require('sequelize')

const Contact = db.define('contact', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  },
  phoneNumber: {
    type: Sequelize.STRING
  },
  passcode: {
    type: Sequelize.STRING,
    defaultValue: ""
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
