const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull, GraphQLSchema, GraphQLList } = require('graphql')
const { Category, Product } = require('../../db/models')

const categoryResolver = () => {
  return Category.findAll()
  .then(categories => categories)
  .catch(err => console.log(err))
}

module.exports = { categoryResolver }
