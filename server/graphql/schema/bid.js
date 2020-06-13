const { GraphQLList, GraphQLBoolean, GraphQLInt } = require('graphql')
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

module.exports = {
  bids,
  bidDetails
}
