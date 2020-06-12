const { GraphQLList, GraphQLBoolean, GraphQLInt } = require('graphql')
const { BidType, BidAreaType } = require('./ObjectTypes')
const { Bid, BidArea } = require('../../db/models')

const allBidsResolver = () => {
  return Bid.findAll()
  .then(bids => bids)
  .catch(err => console.log(err))
}

const bids = {
  type: new GraphQLList(BidType),
  description: 'a list of roys bids',
  resolve: allBidsResolver
}

module.exports = {
  bids
}
