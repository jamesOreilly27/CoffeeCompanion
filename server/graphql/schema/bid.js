const { GraphQLList, GraphQLBoolean, GraphQLInt, GraphQLString, GraphQLFloat } = require('graphql')
const { BidType, BidAreaType, AreaProductType} = require('./ObjectTypes')
const { Bid, BidArea, AreaProduct } = require('../../db/models')

const allBidsResolver = () => {
  return Bid.findAll()
  .then(bids => {
    return bids
  })
  .catch(err => console.log(err))
}

const bidDetailsResolver = (parent, args) => {
  return Bid.findByPk(args.id)
  .then(bid => bid)
  .catch(err => console.log(err))
}

const newBidResolver = (parent, args) => {
  return Bid.create(args)
  .then(bid => bid)
  .catch(err => console.log(err))
}

const newAreaResolver = (parent, args) => {
  return BidArea.create(args)
  .then(area => area)
  .catch(err => console.log(err))
}

const updateAreaResolver = (parent, args) => {
  return BidArea.findByPk(args.id)
  .then(area => area.update({ title: args.title }) )
  .catch(err => console.log(err))
}

const destroyBidArea = (parent, args) => {
  return BidArea.findByPk(args.id)
  .then(area => {
    area.destroy()
    return true
  })
  .catch(err => console.log(err))
}

const incrementQtyResolver = ( parent, { id }, request) => {
  return AreaProduct.findByPk(id)
  .then(areaProduct => areaProduct.update({ qty: areaProduct.qty + 1}))
  .catch(err => console.log(err))
}

const decrementQtyResolver = ( parent, { id }, request) => {
  return AreaProduct.findByPk(id)
  .then(areaProduct => {
    if(areaProduct.qty - 1 === 0) {
      return areaProduct.destroy()
    }
    else {
      return areaProduct.update({ qty: areaProduct.qty - 1 })
    }
  })
  .catch(err => console.log(err))
}

const removeAreaProductResolver = ( parent, { id }, request ) => {
  return AreaProduct.findByPk(id)
  .then(areaProduct => {
    areaProduct.destroy()
    return true
  })
  .catch(err => console.log(err))
}

const addAreaProductResolver = (parent, args) => {
  return AreaProduct.create(args)
  .then(areaProduct => areaProduct)
  .catch(err => console.log(err))
}

const bids = {
  type: new GraphQLList(BidType),
  description: 'a list of roys bids',
  resolve: allBidsResolver
}

const bidDetails = {
  type: BidType,
  description: 'A bids details',
  args: { id: { type: GraphQLInt }},
  resolve: bidDetailsResolver
}

const createBid = {
  type: BidType,
  description: "start a new bid",
  args: {
    title: { type: GraphQLString },
    status: { type: GraphQLString },
    userId: { type: GraphQLInt }
  },
  resolve: newBidResolver
}

const addBidArea = {
  type: BidAreaType,
  description: "add a new area to a bid",
  args: {
    title: { type: GraphQLString },
    bidId: { type: GraphQLInt }
  },
  resolve: newAreaResolver
}

const updateAreaTitle = {
  type: BidAreaType,
  description: "change the name of a bid area",
  args: {
    id: { type: GraphQLInt },
    title: { type: GraphQLString },
  },
  resolve: updateAreaResolver
}

const removeBidArea = {
  type: GraphQLBoolean,
  description: "remove a bid area",
  args: { id: { type: GraphQLInt } },
  resolve: destroyBidArea
}

const incrementProductQty = {
  type: AreaProductType,
  args: { id: { type: GraphQLInt } },
  description: 'increment the qty of an area product',
  resolve: incrementQtyResolver
}

const decrementProductQty = {
  type: AreaProductType,
  args: { id: { type: GraphQLInt } },
  description: 'decrement the qty of an area product',
  resolve: decrementQtyResolver
}

const addAreaProduct = {
  type: AreaProductType,
  description: 'add a new area product',
  args: {
    qty: { type: GraphQLInt },
    price: { type: GraphQLFloat },
    cost: { type: GraphQLFloat },
    productId: { type: GraphQLInt },
    bidAreaId: { type: GraphQLInt }
  },
  resolve: addAreaProductResolver
}

const removeAreaProduct = {
  type: GraphQLBoolean,
  description: 'remove an areaproduct from a bidarea',
  args: { id: { type: GraphQLInt } },
  resolve: removeAreaProductResolver
}

module.exports = {
  bids,
  bidDetails,
  createBid,
  addBidArea,
  updateAreaTitle,
  removeBidArea,
  incrementProductQty,
  decrementProductQty,
  removeAreaProduct,
  addAreaProduct
}
