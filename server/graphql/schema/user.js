const { User } = require('../../db/models')

const userResolver = (parent, args, request) => {
  return User.findOne({ where: { email: request.user.email } })
  .then(user => user)
  .catch(err => console.log(err))
}

module.exports = { userResolver }
