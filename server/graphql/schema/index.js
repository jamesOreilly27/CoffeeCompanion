const { GraphQLObjectType, GraphQLSchema } = require('graphql')
const { products, productDetails } = require('./product')
const { categories, singleCategory } = require('./category')
const { carts, removeFromCart } = require('./cart')
const { currentUser, loginUser, logout } = require('./user')

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: { currentUser, products, categories, productDetails, singleCategory, carts }
})

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: { loginUser, logout, removeFromCart }
})

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
})

module.exports = schema
