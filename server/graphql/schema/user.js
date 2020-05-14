const { GraphQLBoolean, GraphQLNonNull, GraphQLString } = require('graphql')
const { UserType } = require('./ObjectTypes')
const { User } = require('../../db/models')
const { chooseAuthType } = require('./helpers')


//Resolvers
const userResolver = (parent, args, request) => {
  console.log('USER', request.user)
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

//Mutation Fields
const loginUser = {
  type: GraphQLBoolean,
  args: {
    email: { type: new GraphQLNonNull(GraphQLString), },
    password: { type: new GraphQLNonNull(GraphQLString) },
    isSignup: { type: GraphQLBoolean },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString }
  },
  resolve: (parent, { email, password, isSignup, firstName, lastName }, request) => {
    return chooseAuthType(email, password, isSignup, firstName, lastName, User, request)
  }
}

const logout = {
  type: GraphQLBoolean,
  resolve: (parent, args, request) => {
    request.logout()
    return true
  }
}

module.exports = { currentUser, loginUser, logout }
