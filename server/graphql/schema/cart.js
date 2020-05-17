const { GraphQLList, GraphQLBoolean, GraphQLInt } = require('graphql')
const { CartType, LineItemType } = require('./ObjectTypes')
const { Cart, LineItem } = require('../../db/models')

const allCartsResolver = () => {
  return Cart.findAll()
  .then(carts => carts)
  .catch(err => console.log(err))
}

const addResolver = (parent, { productId, cartId, price, quantity }, request) => {
  return LineItem.create({ productId, cartId, price, quantity })
  .then(lineitem => lineitem)
  .catch(err => console.log(err))
}

const removeResolver = ( parent, { id }, request ) => {
  return LineItem.findByPk(id)
  .then(lineitem => {
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
  type: LineItemType,
  args: {
    productId: { type: GraphQLInt },
    cartId: { type: GraphQLInt },
    price: { type: GraphQLInt },
    quantity: { type: GraphQLInt }
  },
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
