const Sequelize = require('sequelize')
const db = require('../db')

const Note = db.define('note', {
  subject: {
    type: Sequelize.STRING,
    allowNull: false
  },
  text: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Note
