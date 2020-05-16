const { GraphQLList, GraphQLBoolean, GraphQLInt } = require('graphql')
const { CartType } = require('./ObjectTypes')
const { Cart, LineItem } = require('../../db/models')

const allCartsResolver = () => {
  return Cart.findAll()
  .then(carts => carts)
  .catch(err => console.log(err))
}

const addResolver = (parent, { lineitem }, request) => {
  if(!request.user) {
    request.session.cart.push(lineitem)
  }
}

const removeResolver = ( parent, { id }, request ) => {
  return LineItem.findByPk(id)
  .then(lineitem => {
    request.session.cart = request.session.cart.filter(item => item.id !== lineitem.id)
    lineitem.destroy()
    return true
  })
  .catch(err => console.log(err))
}

//Query Fields
const carts = {
  type: new GraphQLList(CartType),
  description: 'list of user carts',
  resolve: allCartsResolver
}

//Mutation Fields
const addToCart = {
  type: GraphQLBoolean,
  description: 'add a line item to the users cart',
  resolve: addResolver
}

const removeFromCart = {
  type: GraphQLBoolean,
  args: { id: { type: GraphQLInt } },
  description: 'remove a line item from a cart',
  resolve: removeResolver
}

module.exports = { carts, removeFromCart, addToCart }
