const { GraphQLObjectType, GraphQLSchema } = require('graphql')
const { products, productDetails, getProductByName, upsertProduct, destroyProduct } = require('./product')
const { categories, singleCategory } = require('./category')
const { carts, removeFromCart, addToCart, incrementLineitemQty, decrementLineitemQty } = require('./cart')
const { currentUser, loginUser, logout } = require('./user')
const { bids, bidDetails, createBid, addBidArea, removeBidArea, addAreaProduct, updateAreaTitle, incrementProductQty, decrementProductQty, removeAreaProduct, updateAreaProductPrice, addCustomer, updateStatus, updateHasHeaderImage, updateAreaProductCost } = require('./bid')
const { allCustomers, getCustomerDetails, createCustomer } = require('./customer')
const { createNote, updateNote, deleteNote } = require('./note')

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
    bidDetails,
    allCustomers,
    getCustomerDetails
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
    addBidArea,
    updateAreaTitle,
    removeBidArea,
    addAreaProduct,
    incrementProductQty,
    decrementProductQty,
    removeAreaProduct,
    updateAreaProductPrice,
    updateAreaProductCost,
    createCustomer,
    addCustomer,
    updateStatus,
    updateHasHeaderImage,
    createNote,
    updateNote,
    deleteNote
  }
})

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
})

module.exports = schema
