const { GraphQLObjectType, GraphQLSchema } = require('graphql')
const { products, productDetails, getProductByName, upsertProduct, destroyProduct } = require('./product')
const { categories, singleCategory } = require('./category')
const { carts, removeFromCart, addToCart, incrementLineitemQty, decrementLineitemQty } = require('./cart')
const { currentUser, loginUser, logout } = require('./user')
const { bids, bidDetails, createBid, createBidArea, createAreaProduct, incrementProductQty, decrementProductQty, removeAreaProduct } = require('./bid')

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    currentUser,
    products,
    categories,
    productDetails,
    getProductByName,
    singleCategory,
    carts,
    bids,
    bidDetails
  }
})

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    loginUser,
    logout,
    removeFromCart,
    addToCart,
    incrementLineitemQty,
    decrementLineitemQty,
    upsertProduct,
    destroyProduct,
    createBid,
    createBidArea,
    createAreaProduct,
    incrementProductQty,
    decrementProductQty,
    removeAreaProduct
  }
})

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
})

module.exports = schema
