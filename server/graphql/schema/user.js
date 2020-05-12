const { User } = require('../../db/models')

const userResolver = (parent, args, request) => {
  console.log('FIRING USER RESOLVER')
  return User.findOne({ where: { email: request.user.email } })
  .then(user => user)
  .catch(err => console.log(err))
}

module.exports = { userResolver }
