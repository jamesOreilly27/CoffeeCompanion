const { GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLNonNull, GraphQLSchema } = require('graphql')
const { products, productDetails } = require('./product')
const { categories, singleCategory } = require('./category')
const { cart } = require('./cart')
const { currentUser } = require('./user')
const { chooseAuthType } = require('./helpers')
const { User } = require('../../db/models')

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: { currentUser, products, categories, productDetails, singleCategory, cart }
})

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    loginUser: {
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
    },
    logout: {
      type: GraphQLBoolean,
      resolve: (parent, args, request) => {
        request.logout()
        return true
      }
    }
  }
})

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
})

module.exports = schema
