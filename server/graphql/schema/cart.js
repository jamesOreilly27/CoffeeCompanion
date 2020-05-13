const { GraphQLList } = require('graphql')
const { CartType } = require('./ObjectTypes')
const { Cart, User } = require('../../db/models')

const cartResolver = () => {
  return Cart.findAll()
  .then(carts => carts)
  .catch(err => console.log(err))
}

const cart = {
  type: new GraphQLList(CartType),
  description: 'a customer cart',
  resolve: cartResolver
}

module.exports = { cart }
