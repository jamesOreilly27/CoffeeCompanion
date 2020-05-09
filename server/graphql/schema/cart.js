const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull, GraphQLSchema, GraphQLList } = require('graphql')
const { Cart } = require('../../db/models')

const cartResolver = () => {
  return Cart.findAll()
  .then(carts => carts)
  .catch(err => console.log(err))
}

module.exports = { cartResolver }
