const { UserType } = require('./ObjectTypes')
const { User } = require('../../db/models')


//Resolvers
const userResolver = (parent, args, request) => {
  return User.findOne({ where: { email: request.user.email } })
  .then(user => user)
  .catch(err => console.log(err))
}

//Query Fields
const currentUser = {
  type: UserType,
  description: 'The current logged in user',
  resolve: userResolver
}

module.exports = { currentUser }
