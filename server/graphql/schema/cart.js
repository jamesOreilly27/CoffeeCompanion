const { GraphQLList, GraphQLBoolean } = require('graphql')
const { CartType } = require('./ObjectTypes')
const { Cart, User } = require('../../db/models')

const cartResolver = () => {
  return Cart.findAll()
  .then(carts => carts)
  .catch(err => console.log(err))
}

const addResolver = (parent, { lineitem }, request) => {
  if(!request.user) {
    request.session.cart.push(lineitem)
  }
}

//Query Fields
const cart = {
  type: new GraphQLList(CartType),
  description: 'a customer cart',
  resolve: cartResolver
}

//Mutation Fields
const addToCart = {
  type: GraphQLBoolean,
  description: 'add a line item to the users cart',
  resolve: addResolver
}

module.exports = { cart }
