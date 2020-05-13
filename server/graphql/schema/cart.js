const { GraphQLList } = require('graphql')
const { CartType } = require('./ObjectTypes')
const { Cart } = require('../../db/models')

const cartResolver = () => {
  return Cart.findAll()
  .then(carts => carts)
  .catch(err => console.log(err))
}

const myOrdersResolver = (parent, { user }, request) => {
  return Cart.findAll({ where: { status: 'purchased', userId: user.id } })
  .then(carts => console.log(carts))
  .catch(err => console.log(err))
}

const cart = {
  type: new GraphQLList(CartType),
  description: 'a customer cart',
  resolve: cartResolver
}

const myOrders = {
  type: new GraphQLList(CartType),
  description: 'a users orders',
  resolve: myOrdersResolver
}

module.exports = { cart, myOrders }
