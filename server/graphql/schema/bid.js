const { GraphQLList, GraphQLBoolean, GraphQLInt, GraphQLString } = require('graphql')
const { BidType, BidAreaType } = require('./ObjectTypes')
const { Bid, BidArea } = require('../../db/models')

const allBidsResolver = () => {
  return Bid.findAll()
  .then(bids => bids)
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

const createBidArea = {
  type: BidAreaType,
  description: "add a new area to a bid",
  args: {
    title: { type: GraphQLString },
    bidId: { type: GraphQLInt }
  },
  resolve: newAreaResolver
}

module.exports = {
  bids,
  bidDetails,
  createBid,
  createBidArea
}
