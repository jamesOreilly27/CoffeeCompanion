const { GraphQLList, GraphQLBoolean, GraphQLInt } = require('graphql')
const { CartType, LineItemType } = require('./ObjectTypes')
const { Cart, LineItem } = require('../../db/models')

const allCartsResolver = () => {
  return Cart.findAll()
  .then(carts => carts)
  .catch(err => console.log(err))
}

const addResolver = (parent, { productId, cartId, price, quantity }, request) => {
  return LineItem.findOne({ where: { cartId, productId } })
  .then(lineitem => {
    if(lineitem) return lineitem.update({ productId, cartId, price, quantity: quantity + lineitem.quantity })
    else return LineItem.create({ productId, cartId, price, quantity })
    .then(lineitem => lineitem)
    .catch(err => console.log(err))
  })
}

const removeResolver = ( parent, { id }, request ) => {
  return LineItem.findByPk(id)
  .then(lineitem => {
    lineitem.destroy()
    return true
  })
  .catch(err => console.log(err))
}

const incrementQtyResolver = ( parent, { id }, request) => {
  return LineItem.findByPk(id)
  .then(lineitem => lineitem.update({ quantity: lineitem.quantity + 1 }) )
  .catch(err => console.log(err))
}

const decrementQtyResolver = ( parent, { id }, request) => {
  return LineItem.findByPk(id)
  .then(lineitem => {
    if(lineitem.quantity - 1 <= 0) {
      return lineitem.destroy()
    }
    else return lineitem.update({ quantity: lineitem.quantity - 1 })
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

const incrementLineitemQty = {
  type: LineItemType,
  args: { id: { type: GraphQLInt } },
  description: 'update a lineitem quantity',
  resolve: incrementQtyResolver
}

const decrementLineitemQty = {
  type: LineItemType,
  args: { id: { type: GraphQLInt } },
  description: 'update a lineitem quantity',
  resolve: decrementQtyResolver
}

module.exports = { carts, removeFromCart, addToCart, incrementLineitemQty, decrementLineitemQty }
