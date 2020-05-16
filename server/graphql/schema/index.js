const { GraphQLObjectType, GraphQLSchema } = require('graphql')
const { products, productDetails } = require('./product')
const { categories, singleCategory } = require('./category')
const { carts, removeFromCart, addToCart } = require('./cart')
const { currentUser, loginUser, logout } = require('./user')

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: { currentUser, products, categories, productDetails, singleCategory, carts }
})

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: { loginUser, logout, removeFromCart, addToCart }
})

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
})

module.exports = schema
