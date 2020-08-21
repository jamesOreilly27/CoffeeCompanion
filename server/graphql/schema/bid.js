const { GraphQLList, GraphQLBoolean, GraphQLInt, GraphQLString, GraphQLFloat } = require('graphql')
const { BidType, BidAreaType, AreaProductType, NoteType } = require('./ObjectTypes')
const { Bid, BidArea, AreaProduct, Customer, Note } = require('../../db/models')

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

const updateStatusResolver = ( parent, { id, status }) => {
  return Bid.findByPk(id)
  .then(bid => bid.update({ status }))
  .catch(err => console.log(err))
}

const updatehasHeaderImageResolver = ( parent, { id, hasHeaderImage }) => {
  return Bid.findByPk(id)
  .then(bid => bid.update({ hasHeaderImage }))
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

const incrementQtyResolver = ( parent, { id, bidId, laborRate, laborTotal, laborTime }, request) => {
  return Bid.findByPk(bidId)
  .then(bid => bid.update({ laborTotal: laborTotal + (laborRate * laborTime)}))
  .then(() => AreaProduct.findByPk(id))
  .then(areaProduct => areaProduct.update({ qty: areaProduct.qty + 1}))
  .catch(err => console.log(err))
}

const decrementQtyResolver = ( parent, { id, bidId, laborRate, laborTotal, laborTime } ) => {
  return Bid.findByPk(bidId)
  .then(bid => {
    let newTotal
    if(laborTotal - (laborRate * laborTime) > 0) newTotal = laborTotal - (laborRate * laborTime)
    else newTotal = 0
    bid.update({ laborTotal: newTotal })
    return
  })
  .then(() => AreaProduct.findByPk(id))
  .then(areaProduct => {
    if(areaProduct.qty - 1 === 0) {
      const deleted = Object.assign(areaProduct, { qty: 0 })
      areaProduct.destroy()
      return deleted
    }
    else {
      return areaProduct.update({ qty: areaProduct.qty - 1 })
    }
  })
  .catch(err => console.log(err))
}

const removeAreaProductResolver = (parent, { id, bidId, qty, laborTotal, laborRate, laborTime }) => {
  return Bid.findByPk(bidId)
  .then(bid => {
    let newTotal
    if(laborTotal - (laborRate * laborTime * qty) > 0) newTotal = laborTotal - (laborRate * laborTime * qty)
    else newTotal = 0
    bid.update({ laborTotal: newTotal })
    return
  })
  .then(() => {
    return AreaProduct.findByPk(id)
  })
  .then(areaProduct => {
    const deleted = Object.assign(areaProduct)
    areaProduct.destroy()
    console.log('DELETED', deleted)
    return deleted
  })
  .catch(err => console.log(err))
}

const addAreaProductResolver = (parent, { qty, price, cost, productId, bidAreaId, bidId, laborTime, laborRate, laborTotal }) => {
  return Bid.findByPk(bidId)
  .then(bid => {
    bid.update({ laborTotal: laborTotal + (laborRate * laborTime * qty) })
    return
  })
  .then(() => AreaProduct.create({ qty, price, cost, productId, bidAreaId }))
  .then(areaProduct => areaProduct)
  .catch(err => console.log(err))
}

const updateProductPriceResolver = (parent, args) => {
  return AreaProduct.findByPk(args.id)
  .then(areaProduct => areaProduct.update({ price: args.price }))
  .catch(err => console.log(err))
}

const updateProductCostResolver = (parent, args) => {
  return AreaProduct.findByPk(args.id)
  .then(areaProduct => areaProduct.update({ cost: args.cost }))
  .catch(err => console.log(err))
}

const addCustomerResolver = (parent, { companyName, email, phoneNumber, address, town, zipCode, state, id, taxExempt }) => {
  return BidArea.create({ title: "Area", bidId: id })
  .then(() => {
    return Customer.create({ companyName, email, phoneNumber, address, town, zipCode, state, taxExempt })
  .then(customer => {
    return Bid.findByPk(id)
  .then(bid => bid.update({ customerId: customer.id, title: customer.companyName }))
    })
  })
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

const updateStatus = {
  type: BidType,
  description: "change the status of a bid",
  args: {
    id: { type: GraphQLInt },
    status: { type: GraphQLString }
  },
  resolve: updateStatusResolver
}

const updatehasHeaderImage = {
  type: BidType,
  description: '',
  args: {
    id: { type: GraphQLInt },
    hasHeaderImage: { type: GraphQLBoolean }
  },
  resolve: updatehasHeaderImageResolver
}

const addCustomer = {
  type: BidType,
  description: 'attach a new customer to the newest bid',
  args: {
    companyName: { type: GraphQLString },
    email: { type: GraphQLString },
    phoneNumber: { type: GraphQLString },
    address: { type: GraphQLString },
    town: { type: GraphQLString },
    zipCode: { type: GraphQLString },
    id: { type: GraphQLInt },
    taxExempt: { type: GraphQLBoolean }
  },
  resolve: addCustomerResolver
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
  args: {
    id: { type: GraphQLInt },
    qty: { type: GraphQLInt },
    bidId: { type: GraphQLInt },
    laborRate: { type: GraphQLInt },
    laborTotal: { type: GraphQLFloat },
    laborTime: { type: GraphQLFloat }
  },
  description: 'increment the qty of an area product',
  resolve: incrementQtyResolver
}

const decrementProductQty = {
  type: AreaProductType,
  args: {
    id: { type: GraphQLInt },
    qty: { type: GraphQLInt },
    bidId: { type: GraphQLInt },
    laborRate: { type: GraphQLInt },
    laborTotal: { type: GraphQLFloat },
    laborTime: { type: GraphQLFloat }
  },
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
    bidId: { type: GraphQLInt },
    productId: { type: GraphQLInt },
    bidAreaId: { type: GraphQLInt },
    laborTime: { type: GraphQLFloat },
    laborRate: { type: GraphQLInt },
    laborTotal: { type: GraphQLFloat }
  },
  resolve: addAreaProductResolver
}

const removeAreaProduct = {
  type: AreaProductType,
  description: 'remove an areaproduct from a bidarea',
  args: {
    id: { type: GraphQLInt },
    qty: { type: GraphQLInt },
    bidId: { type: GraphQLInt },
    laborRate: { type: GraphQLInt },
    laborTime: { type: GraphQLFloat },
    laborTotal: { type: GraphQLFloat }
  },
  resolve: removeAreaProductResolver
}

const updateAreaProductPrice = {
  type: AreaProductType,
  description: "update the price of an area product",
  args: {
    id: { type: GraphQLInt },
    price: { type: GraphQLFloat }
  },
  resolve: updateProductPriceResolver
}

const updateAreaProductCost = {
  type: AreaProductType,
  description: "update the price of an area product",
  args: {
    id: { type: GraphQLInt },
    cost: { type: GraphQLFloat }
  },
  resolve: updateProductCostResolver
}

module.exports = {
  bids,
  bidDetails,
  createBid,
  updateStatus,
  updatehasHeaderImage,
  addBidArea,
  updateAreaTitle,
  removeBidArea,
  incrementProductQty,
  decrementProductQty,
  removeAreaProduct,
  addAreaProduct,
  updateAreaProductPrice,
  updateAreaProductCost,
  addCustomer
}
